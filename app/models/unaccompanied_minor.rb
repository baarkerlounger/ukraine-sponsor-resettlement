require "securerandom"

class UnaccompaniedMinor < ApplicationRecord
  include UamValidations
  include ContactDetailsValidations
  include ApplicationHelper

  self.table_name = "unaccompanied_minors"

  SCHEMA_VERSION = 1

  attr_accessor :is_eligible,
                :have_parental_consent,
                :have_parental_consent_options,
                :parental_consent,
                :uk_parental_consent_file_type,
                :uk_parental_consent_filename,
                :uk_parental_consent_saved_filename,
                :ukraine_parental_consent_file_type,
                :ukraine_parental_consent_filename,
                :ukraine_parental_consent_saved_filename,
                :minor_fullname,
                :minor_date_of_birth,
                :minor_date_of_birth_as_string,
                :fullname,
                :email,
                :phone_number,
                :residential_line_1,
                :residential_line_2,
                :residential_town,
                :residential_postcode,
                :sponsor_date_of_birth,
                :sponsor_date_of_birth_as_string,
                :agree_privacy_statement,
                :certificate_reference,
                :type,
                :version,
                :ip_address,
                :user_agent,
                :started_at,
                :final_submission
                :privacy_statement_confirm

  after_initialize :after_initialize
  before_save :serialize
  before_save :generate_reference

  has_one_attached :parental_consent

  validates :parental_consent, antivirus: true # Add this for antivirus validation
  validates :privacy_statement_confirm, acceptance: { message: "You must read and agree to the privacy statement to continue" } # Privacy statement checkbox required to proceed 


  after_find do
    assign_attributes(answers)
  end

  def after_initialize
    @final_submission = false
    @have_parental_consent_options = %i[yes no]
    self.certificate_reference ||= get_formatted_certificate_number
  end

  def as_json
    {
      id:,
      reference:,
      created_at:,
      type:,
      version:,
      is_eligible:,
      have_parental_consent:,
      uk_parental_consent_file_type:,
      uk_parental_consent_filename:,
      uk_parental_consent_saved_filename:,
      ukraine_parental_consent_file_type:,
      ukraine_parental_consent_filename:,
      ukraine_parental_consent_saved_filename:,
      minor_fullname:,
      minor_date_of_birth:,
      minor_date_of_birth_as_string:,
      fullname:,
      email:,
      phone_number:,
      residential_line_1:,
      residential_line_2:,
      residential_town:,
      residential_postcode:,
      sponsor_date_of_birth:,
      sponsor_date_of_birth_as_string:,
      agree_privacy_statement:,
      certificate_reference:,
      ip_address:,
      user_agent:,
      started_at:,
    }.compact
  end

private

  def serialize
    self.type = "unaccompanied_minor"
    self.version = SCHEMA_VERSION
    self.answers = as_json
  end

  def generate_reference
    self.reference ||= sprintf("SPON-%<ref>s", ref: SecureRandom.uuid[9, 11].upcase)
  end
end
