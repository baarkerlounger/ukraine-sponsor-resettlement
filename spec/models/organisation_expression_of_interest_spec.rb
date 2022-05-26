require "rails_helper"

RSpec.describe OrganisationExpressionOfInterest, type: :model do
  describe "deserialising json into attributes" do
    it "sets attributes based on the json column on load" do
      answers = { family_type: "single_adult", living_space: "rooms_in_property" }
      id = ActiveRecord::Base.connection.insert("INSERT INTO organisation_expressions_of_interest (answers, created_at, updated_at) VALUES ('#{JSON.generate(answers)}', NOW(), NOW())")
      record = described_class.find(id)
      expect(record.family_type).to eq(answers[:family_type])
      expect(record.living_space).to eq(answers[:living_space])
    end
  end

  describe "validations" do
    it "Doesn't validate fields if they are not set" do
      app = described_class.new
      expect(app.valid?).to be(true)
    end

    it "validates that the family_type attribute matches the allowed values if set" do
      app = described_class.new
      app.family_type = "invalid"
      expect(app.valid?).to be(false)
      expect(app.errors[:family_type]).to include("You must select an option to continue")
      app.family_type = "single_adult"
      expect(app.valid?).to be(true)
    end

    it "validates that the living_space attribute matches the allowed values if set" do
      app = described_class.new
      app.living_space = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:living_space]).to include("Please choose one or more of the options")
      app.living_space = "rooms_in_property"
      expect(app.valid?).to be(true)
    end

    it "validates that the step_free attribute matches the allowed values if set" do
      app = described_class.new
      app.step_free = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:step_free]).to include("You must select an option to continue")
      app.step_free = "all"
      expect(app.valid?).to be(true)
    end

    it "validates that the property_count attribute is an integer >= 0" do
      app = described_class.new
      app.property_count = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:property_count]).to include("Please enter a non-negative whole number")
      app.property_count = "-1"
      expect(app.valid?).to be(false)
      app.property_count = "5"
      expect(app.valid?).to be(true)
    end

    it "validates that the single_room_count attribute is an integer >= 0" do
      app = described_class.new
      app.single_room_count = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:single_room_count]).to include("Please enter a non-negative whole number")
      app.single_room_count = "-1"
      expect(app.valid?).to be(false)
      app.single_room_count = "5"
      expect(app.valid?).to be(true)
    end

    it "validates that the double_room_count attribute is an integer >= 0" do
      app = described_class.new
      app.double_room_count = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:double_room_count]).to include("Please enter a non-negative whole number")
      app.double_room_count = "-1"
      expect(app.valid?).to be(false)
      app.double_room_count = "5"
      expect(app.valid?).to be(true)
    end

    it "validates that the postcode attribute is at least 2 and less than 100 characters" do
      app = described_class.new
      app.postcode = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:postcode]).to include("Please enter a valid UK postcode(s)")
      app.postcode = "^"
      expect(app.valid?).to be(false)
      expect(app.errors[:postcode]).to include("Please enter a valid UK postcode(s)")
      app.postcode = "A"
      expect(app.valid?).to be(false)
      app.postcode = "X" * 101
      expect(app.valid?).to be(false)
      app.postcode = "AB"
      expect(app.valid?).to be(true)
    end

    it "validates that the organisation_name attribute is at least 2 and less than 100 characters" do
      app = described_class.new
      app.organisation_name = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:organisation_name]).to include("Please enter a valid organisation name")
      app.organisation_name = "A"
      expect(app.valid?).to be(false)
      app.organisation_name = "X" * 101
      expect(app.valid?).to be(false)
      app.organisation_name = "AB"
      expect(app.valid?).to be(true)
    end

    it "validates that the organisation_type attribute is correct" do
      app = described_class.new
      app.organisation_type = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:organisation_type]).to include("You must select an option to continue")
      app.organisation_type = "charity"
      expect(app.valid?).to be(true)
    end

    it "validates that the phone_number attribute is correct" do
      app = described_class.new
      app.phone_number = "12345678"
      expect(app.valid?).to be(false)
      expect(app.errors[:phone_number]).to include("You must enter a valid phone number")
      app.phone_number = "(12345678)"
      expect(app.valid?).to be(false)
      app.phone_number = "123456789012345"
      expect(app.valid?).to be(false)
      app.phone_number = "123456789XXXXXXXXXXXXXXXXXXXXXXX"
      expect(app.valid?).to be(false)
      app.phone_number = "(01234) 567890"
      expect(app.valid?).to be(true)
      app.phone_number = ""
      expect(app.valid?).to be(true)
    end

    it "validates that the agree_future_contact attribute is correct" do
      app = described_class.new
      app.agree_future_contact = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:agree_future_contact]).to include("You must tick the box to continue")
      app.agree_future_contact = "false"
      expect(app.valid?).to be(false)
      app.agree_future_contact = "true"
      expect(app.valid?).to be(true)
    end

    it "validates that the agree_privacy_statement attribute is correct" do
      app = described_class.new
      app.agree_privacy_statement = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:agree_privacy_statement]).to include("You must tick the box to continue")
      app.agree_privacy_statement = "false"
      expect(app.valid?).to be(false)
      app.agree_privacy_statement = "true"
      expect(app.valid?).to be(true)
    end

    it "validates that the fullname attribute is two words" do
      app = described_class.new
      app.fullname = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:fullname]).to include("You must enter your full name")
      app.fullname = "oneword"
      expect(app.valid?).to be(false)
      expect(app.errors[:fullname]).to include("You must enter your full name")
      app.fullname = "first #{'X' * 128}"
      expect(app.valid?).to be(false)
      expect(app.errors[:fullname]).to include("You must enter your full name")
      app.fullname = "two words"
      expect(app.valid?).to be(true)
    end

    it "validates that the fullname attribute does not allowed special characters except '" do
      app = described_class.new
      app.fullname = "Bob!@£$%^&*(){}<>|\\/& Jones Ltd"
      expect(app.valid?).to be(false)
      expect(app.errors[:fullname]).to include("You must enter your full name")
      app.fullname = "Bryan O'Driscoll Ltd"
      expect(app.valid?).to be(true)
      app.fullname = "Bryan & Sandra Smith Plc"
      expect(app.valid?).to be(false)
      expect(app.errors[:fullname]).to include("You must enter your full name")
    end

    it "validates that the organisation name attribute does not allowed special characters except ' and &" do
      app = described_class.new
      app.organisation_name = "Bob!@£$%^*(){}<>|\\/ Jones Ltd"
      expect(app.valid?).to be(false)
      expect(app.errors[:organisation_name]).to include("Please enter a valid organisation name")
      app.organisation_name = "Bryan O'Driscoll Ltd"
      expect(app.valid?).to be(true)
      app.organisation_name = "Bryan & Sandra Smith Plc"
      expect(app.valid?).to be(true)
    end

    it "validates that the email attribute is correct" do
      app = described_class.new
      app.email = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:email]).to include("You must enter a valid email address")
      app.email = "oneword"
      expect(app.valid?).to be(false)
      app.email = "#{'x' * 120}@domain.com"
      expect(app.valid?).to be(false)
      expect(app.errors[:email]).to include("You must enter a valid email address")
      app.email = "first@last.com"
      expect(app.valid?).to be(true)
    end

    it "validates that the organisation_type_business_information attribute is correct" do
      app = described_class.new
      app.organisation_type_business_information = "X" * 501
      expect(app.valid?).to be(false)
      expect(app.errors[:organisation_type_business_information]).to include("Please use 500 characters or less")
      app.organisation_type_business_information = "X" * 500
      expect(app.valid?).to be(true)
    end

    it "validates that the organisation_type_other_information attribute is correct" do
      app = described_class.new
      app.organisation_type_other_information = "X" * 501
      expect(app.valid?).to be(false)
      expect(app.errors[:organisation_type_other_information]).to include("Please use 500 characters or less")
      app.organisation_type_other_information = "X" * 500
      expect(app.valid?).to be(true)
    end
  end

  describe "#as_json" do
    it "includes all of the answer values" do
      app = described_class.new(family_type: :single_adult, living_space: :rooms_in_home_shared_facilities)
      expect(app.as_json).to eq({ family_type: :single_adult, living_space: :rooms_in_home_shared_facilities })
    end

    it "does not include empty values" do
      app = described_class.new(family_type: :single_adult)
      expect(app.as_json).to eq({ family_type: :single_adult })
    end
  end
end
