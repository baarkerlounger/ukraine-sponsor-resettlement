require "rails_helper"

EXPECTED_TEXT = "I've recorded my interest, what happens now?"

RSpec.describe "Local Authority matching form", type: :system do
  before do
    driven_by(:rack_test_user_agent)
  end

  describe "visiting the additional_info form without a valid reference in url" do
    it "redirects user to error page when missing" do
      visit "/additional-info/"

      expect(page).to have_content("Reference not found")
    end

    it "redirects user to error page when incorrect format" do
      visit "/additional-info/incorrect-format-reference"

      expect(page).to have_content("Reference not found")
    end
  end

  describe "visiting the additional_info form with a valid reference in url" do
    it "displays the landing page" do
      visit "/additional-info/ANON-XXXX-XXXX-X"

      expect(page).to have_content(EXPECTED_TEXT)
    end

    it "displays the landing page with mixed case" do
      visit "/additional-info/anon-XX99-X2X1-0"

      expect(page).to have_content(EXPECTED_TEXT)
    end
  end

  describe "completing the additional information form" do
    it "saves all of the answers in the database" do
      visit "/additional-info/ANON-XXXX-XXXX-X"

      expect(page).to have_content(EXPECTED_TEXT)
      click_link("Provide additional information")

      fill_in("Enter your full name", with: "John Smith")
      click_button("Continue")

      fill_in("Enter your email address", with: "john.smith@example.com")
      click_button("Continue")

      expect(page).to have_content("Name John Smith")
      expect(page).to have_content("Email john.smith@example.com")

      click_button("Accept And Send")

      expect(page).to have_content("Application complete")
      expect(page).to have_content("ANON-XXXX-XXXX-X")
      expect(page).to have_content("Thank you for providing additional information for the Homes for Ukraine Scheme")

      application = IndividualExpressionOfInterest.order("created_at DESC").last
      expect(application.as_json).to include({
                                                 email: "john.smith@example.com",
                                                 fullname: "John Smith",
                                              })

      expect(application.ip_address).to eq("127.0.0.1")
    end
  end
end
