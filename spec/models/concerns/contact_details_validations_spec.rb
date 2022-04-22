require "rails_helper"

RSpec.describe ContactDetailsValidations, type: :model do
  describe "validations" do
    it "address line 1 is valid" do
      app = AdditionalInfo.new
      app.residential_line_1 = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_line_1]).to include("Please enter a valid address line 1")
      app.residential_line_1 = " "
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_line_1]).to include("Please enter a valid address line 1")
      app.residential_line_1 = "X" * 129
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_line_1]).to include("Please enter a valid address line 1")
      app.residential_line_1 = "House number & Street name"
      expect(app.valid?).to be(true)
    end

    it "address line 2 does not exceed 128 characters if supplied" do
      app = AdditionalInfo.new
      app.residential_line_2 = "X" * 129
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_line_2]).to include("Please enter a valid address line 2")
      app.residential_line_2 = ""
      expect(app.valid?).to be(true)
      app.residential_line_2 = " "
      expect(app.valid?).to be(true)
      app.residential_line_2 = "House name"
      expect(app.valid?).to be(true)
    end

    it "address town or city is valid" do
      app = AdditionalInfo.new
      app.residential_town = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_town]).to include("Please enter a valid town or city")
      app.residential_town = " "
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_town]).to include("Please enter a valid town or city")
      app.residential_town = "X" * 129
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_town]).to include("Please enter a valid town or city")
      app.residential_town = "Town or city"
      expect(app.valid?).to be(true)
    end

    it "address postcode is valid" do
      app = AdditionalInfo.new
      app.residential_postcode = ""
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_postcode]).to include("Please enter a valid UK postcode")
      app.residential_postcode = " "
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_postcode]).to include("Please enter a valid UK postcode")
      app.residential_postcode = "X" * 129
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_postcode]).to include("Please enter a valid UK postcode")
      app.residential_postcode = "XX1 XX"
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_postcode]).to include("Please enter a valid UK postcode")
      app.residential_postcode = "XX 1XX"
      expect(app.valid?).to be(false)
      expect(app.errors[:residential_postcode]).to include("Please enter a valid UK postcode")
      app.residential_postcode = "XX1 1XX"
      expect(app.valid?).to be(true)
    end
  end
end

