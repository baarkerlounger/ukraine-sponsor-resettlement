require "securerandom"

class IndividualExpressionOfInterest < ApplicationRecord
  self.table_name = "individual_expressions_of_interest"

  POSTCODE_REGEX = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
  MIN_PHONE_DIGITS = 9
  MAX_PHONE_DIGITS = 14

  attr_accessor :family_or_single_types, :living_space_types, :mobility_impairments_types, :accommodation_length_types,
                :family_or_single_type, :living_space_type, :mobility_impairments_type, :accommodation_length_type, :single_room_count, :double_room_count, :postcode, :phone_number, :agree_future_contact, :agree_privacy_statement,
                :fullname, :email

  validate :validate_family_or_single_type, if: :family_or_single_type

  validate :validate_living_space_type, if: :living_space_type

  validate :validate_mobility_impairments_type, if: :mobility_impairments_type

  validate :validate_mobility_impairments_type, if: :mobility_impairments_type

  validates :single_room_count, allow_nil: true, numericality: { only_integer: true, :greater_than_or_equal_to => 0 }

  validates :double_room_count, allow_nil: true, numericality: { only_integer: true, :greater_than_or_equal_to => 0 }

  validate :validate_postcodes, if: :postcode

  validate :validate_accommodation_length_type, if: :accommodation_length_type

  validate :validate_fullname, if: :fullname

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: I18n.t(:invalid_email, scope: :error) }, allow_nil: true

  validate :validate_phone_number, if: :phone_number

  validates :agree_future_contact, acceptance: {accept: 'true', message: I18n.t(:must_be_accepted, scope: :error) }, allow_nil: true

  validates :agree_privacy_statement, acceptance: {accept: 'true', message: I18n.t(:must_be_accepted, scope: :error) }, allow_nil: true


  after_initialize :after_initialize
  before_save :serialize
  before_save :generate_reference

  after_find do
    assign_attributes(answers)
  end

  def after_initialize
    @family_or_single_types = %i[single_adult more_than_one_adult adults_with_children no_preference]
    @living_space_types = %i[rooms_in_home_shared_facilities self_contained_property multiple_properties]
    @mobility_impairments_types = %i[yes_all yes_some no dont_know]
    @accommodation_length_types = %i[from_6_to_9_months from_10_to_12_months more_than_12_months]
  end

  def as_json
    {
      family_or_single_type:,
      living_space_type:,
      mobility_impairments_type:,
      single_room_count:,
      double_room_count:,
      postcode:,
      accommodation_length_type:,
      agree_future_contact:,
      agree_privacy_statement:,

      fullname:,
      email:,
      phone_number:,
      reference:,
    }.compact
  end

private

  def validate_family_or_single_type
    unless @family_or_single_types.include?(@family_or_single_type.to_sym)
      errors.add(:family_or_single_type, I18n.t(:choose_option, scope: :error))
    end
  end

  def validate_living_space_type
    unless @living_space_types.include?(@living_space_type.to_sym)
      errors.add(:living_space_type, I18n.t(:choose_option, scope: :error))
    end
  end

  def validate_mobility_impairments_type
    unless @mobility_impairments_types.include?(@mobility_impairments_type.to_sym)
      errors.add(:mobility_impairments_type, I18n.t(:choose_option, scope: :error))
    end
  end

  def validate_postcodes
    postcodes = @postcode.split(",").map{|postcode| postcode.strip}
    valid_postcodes = postcodes.grep(POSTCODE_REGEX)

    unless @postcode.nil? || ((@postcode.strip.length != 0) && (postcodes.length == valid_postcodes.length))
      errors.add(:postcode, I18n.t(:invalid_postcode, scope: :error))
    end
  end

  def validate_accommodation_length_type
    unless @accommodation_length_types.include?(@accommodation_length_type.to_sym)
      errors.add(:accommodation_length_type, I18n.t(:choose_option, scope: :error))
    end
  end

  def validate_fullname
    unless @fullname.nil? || ((@fullname.split.length >= 2) && (@fullname.strip.length >= 3))
      errors.add(:fullname, I18n.t(:invalid_fullname, scope: :error))
    end
  end

  def validate_phone_number
    if !@phone_number.nil? && !((@phone_number =~ /[0-9 -+]+$/) &&
      ((@phone_number.scan(/\d/).join.length >= MIN_PHONE_DIGITS) && (@phone_number.scan(/\d/).join.length <= MAX_PHONE_DIGITS)))
      errors.add(:phone_number, I18n.t(:invalid_phone_number, scope: :error))
    end
  end

  def serialize
    self.answers = as_json
  end

  def generate_reference
    self.reference ||= SecureRandom.base64(99).gsub!(/[+=\/]/, "")[0, 10].downcase
  end
end
