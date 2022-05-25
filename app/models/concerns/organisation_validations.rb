module OrganisationValidations
  extend ActiveSupport::Concern

  MIN_PHONE_DIGITS    = 9
  MAX_PHONE_DIGITS    = 14
  SPECIAL_CHARACTERS  = /[!"£$%{}<>|&@\/()=?^;]/

  included do
    validate :validate_family_type, if: -> { run_validation? :family_type }
    validate :validate_fullname, if: -> { run_validation? :fullname }
    validate :validate_postcode, if: -> { run_validation? :postcode }
    validates :email, length: { maximum: 128, message: I18n.t(:invalid_email, scope: :error) }, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: I18n.t(:invalid_email, scope: :error) }, if: -> { run_validation? :email }
    validate :validate_phone_number, if: -> { run_validation? :phone_number }
    validate :validate_step_free, if: -> { run_validation? :step_free }
    validate :validate_living_space, if: -> { run_validation? :living_space }
    validates :single_room_count, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: I18n.t(:invalid_number, scope: :error) }, if: -> { run_validation? :single_room_count }
    validates :double_room_count, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: I18n.t(:invalid_number, scope: :error) }, if: -> { run_validation? :double_room_count }
    validates :agree_future_contact, acceptance: { accept: "true", message: I18n.t(:must_be_accepted, scope: :error) }, if: -> { run_validation? :agree_future_contact }
    validates :agree_privacy_statement, acceptance: { accept: "true", message: I18n.t(:must_be_accepted, scope: :error) }, if: -> { run_validation? :agree_privacy_statement }
  end

private

  def validate_family_type
    validate_enum(@family_types, @family_type, :family_type)
  end

  def validate_step_free
    validate_enum(@step_free_types, @step_free, :step_free)
  end

  def validate_enum(enum, value, attribute)
    unless value && enum.include?(value.to_sym)
      errors.add(attribute, I18n.t(:choose_option, scope: :error))
    end
  end

  def validate_fullname
    if @fullname.nil? || @fullname.strip.length < 3 || @fullname.strip.length > 128 || @fullname.split.length < 2 || @fullname.match(SPECIAL_CHARACTERS)
      errors.add(:fullname, I18n.t(:invalid_fullname, scope: :error))
    end
  end

  def validate_postcode
    if @postcode.nil? || @postcode.length < 2 || @postcode.length > 100 || @postcode.match(SPECIAL_CHARACTERS)
      errors.add(:postcode, I18n.t(:invalid_postcode, scope: :error))
    end
  end

  def validate_phone_number
    if @phone_number.present? &&
        (@phone_number.scan(/\d/).join.length < MIN_PHONE_DIGITS ||
            @phone_number.scan(/\d/).join.length > MAX_PHONE_DIGITS ||
            !@phone_number.match(/[0-9 -+]+$/))
      errors.add(:phone_number, I18n.t(:invalid_phone_number, scope: :error))
    end
  end

  def validate_living_space
    if living_space.nil? || @living_space.length.zero?
      errors.add(:living_space, I18n.t(:choose_one_or_more_options, scope: :error))
    end
  end

  def run_validation?(attribute)
    @final_submission || send(attribute)
  end
end
