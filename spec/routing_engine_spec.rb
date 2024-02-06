require "rails_helper"

RSpec.describe RoutingEngine, type: :model do
  describe "unaccompanied minors - routing back to task list when a 'section' is complete" do
    it "when name(s) is complete route to task list" do
      application = UnaccompaniedMinor.new
      application.has_other_names = "false"
      expect(described_class.get_next_unaccompanied_minor_step(application, 11)).to be(999)
      application.has_other_names = "true"
      expect(described_class.get_next_unaccompanied_minor_step(application, 13)).to be(999)
    end

    it "when contact details is complete route to task list" do
      application = UnaccompaniedMinor.new
      application.phone_number = "07777 123 456"
      expect(described_class.get_next_unaccompanied_minor_step(application, 15)).to be(999)
    end

    it "when additional details is complete route to task list" do
      application = UnaccompaniedMinor.new
      application.has_other_nationalities = "false"
      expect(described_class.get_next_unaccompanied_minor_step(application, 20)).to be(999)
      application.has_other_nationalities = "true"
      expect(described_class.get_next_unaccompanied_minor_step(application, 22)).to be(999)
    end

    it "when child's details is complete route to task list" do
      application = UnaccompaniedMinor.new
      application.ukraine_parental_consent_filename = "uploaded-file-name"
      expect(described_class.get_next_unaccompanied_minor_step(application, 37)).to be(999)
    end

    it "when sponsor is or is not living at address" do
      application = UnaccompaniedMinor.new
      application.different_address = "Yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 24)).to be(25)
      application.different_address = "No"
      expect(described_class.get_next_unaccompanied_minor_step(application, 24)).to be(26)
    end

    it "when sponsor is or is not living with over 16 year olds" do
      application = UnaccompaniedMinor.new
      application.other_adults_address = "Yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 25)).to be(27)
      application.other_adults_address = "No"
      expect(described_class.get_next_unaccompanied_minor_step(application, 25)).to be(999)
    end

    it "when sponsor has finished adding over 16 year olds" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 28)).to be(999)
    end

    it "when sponsor has answered adult at address, if any, id type and number" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 31)).to be(999)
    end

    it "when sponsor has finished child questions" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 34)).to be(999)
    end

    it "when sponsor has uploaded UK consent form" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 36)).to be(999)
    end

    it "when sponsor has uploaded Ukraine consent form" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 37)).to be(999)
    end

    it "when sponsor has answered consent to share your data" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 38)).to be(999)
    end

    it "when sponsor has answered sponsor declaration" do
      application = UnaccompaniedMinor.new
      expect(described_class.get_next_unaccompanied_minor_step(application, 39)).to be(999)
    end
  end

  describe "getting the next step - unaccompanied minors" do
    it "when the minor is not under 18" do
      application = UnaccompaniedMinor.new
      application.is_under_18 = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 1)).to be(-1)
      application.is_under_18 = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 1)).to be(2)
    end

    it "when next step is dependent on child not living in Ukraine before 31st December 2021" do
      application = UnaccompaniedMinor.new
      application.is_living_december = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 2)).to be(3)
      application.is_living_december = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 2)).to be(4)
    end

    it "when minor is born after 31st December 2021" do
      application = UnaccompaniedMinor.new
      application.is_born_after_december = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 3)).to be(-1)
      application.is_born_after_december = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 3)).to be(4)
    end

    it "when minor is unaccompanied" do
      application = UnaccompaniedMinor.new
      application.is_unaccompanied = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 4)).to be(5)
      application.is_unaccompanied = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 4)).to be(-1)
    end

    it "when sponsor has consent forms" do
      application = UnaccompaniedMinor.new
      application.is_consent = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 5)).to be(-1)
      application.is_consent = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 5)).to be(6)
    end

    it "when sponsor is committed to 18 months" do
      application = UnaccompaniedMinor.new
      application.is_committed = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 6)).to be(-1)
      application.is_committed = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 6)).to be(7)
    end

    it "sponsor is permitted to live in the UK" do
      application = UnaccompaniedMinor.new
      application.is_permitted = "no"
      expect(described_class.get_next_unaccompanied_minor_step(application, 7)).to be(-1)
      application.is_permitted = "yes"
      expect(described_class.get_next_unaccompanied_minor_step(application, 7)).to be(9)
    end

    it "when completing names for child - choosing 'Yes' to other names" do
      application = UnaccompaniedMinor.new
      application.has_other_names = "true"
      expect(described_class.get_next_unaccompanied_minor_step(application, 11)).to be(12)
    end
  end
end
