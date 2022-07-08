require "rails_helper"

RSpec.describe "Unaccompanied minor expression of interest", :focus, type: :system do
  before do
    driven_by(:rack_test_user_agent)
  end

  describe "submitting the form" do
    it "shows the guidance page before the start page" do
      visit "/unaccompanied-minor/"
      expect(page).to have_content("Sponsor a child fleeing Ukraine without a parent")

      click_link("Apply for permission to sponsor an unaccompanied child fleeing Ukraine")

      expect(page).to have_content("Apply for permission to sponsor a child fleeing Ukraine without a parent")
    end

    it "shows check if eligible for this service page" do
      visit "/unaccompanied-minor/start"
      expect(page).to have_content("Apply for permission to sponsor a child fleeing Ukraine without a parent")

      click_link("Start now")

      expect(page).to have_content("Check if you can use this service")
    end

    # it "shows the user uneligible page if they answer NO to any question" do
    #   visit "/unaccompanied-minor/start"
    #   expect(page).to have_content("Apply for permission to sponsor a child fleeing Ukraine without a parent")

    #   click_link("Start now")

    #   expect(page).to have_content("Check if you can use this service")

    #   click_link("Continue")

    #   # step 1
    #   expect(page).to have_content("Is the child you want to sponsor under 18?")
    #   choose("No")
    #   click_link("Continue")

    # end
      

    it "takes the user to the end of eligibility path" do
      visit "/unaccompanied-minor/start"
      expect(page).to have_content("Apply for permission to sponsor a child fleeing Ukraine without a parent")

      click_link("Start now")

      expect(page).to have_content("Check if you can use this service")

      click_link("Continue")

      # step 1
      expect(page).to have_content("Is the child you want to sponsor under 18?")
      choose("Yes")
      click_button("Continue")

      # step 2
      expect(page).to have_content("Were they living in Ukraine on 31 December 2021?")
      choose("Yes")
      click_button("Continue")

      # step 3 is skipped in this instance

      # step 4
      expect(page).to have_content("Are they travelling to the UK with a parent or legal guardian?")
      choose("Yes")
      click_button("Continue")

      # step 5
      expect(page).to have_content("Do they have a parent or legal guardian that can provide written consent?")
      choose("Yes")
      click_button("Continue")
     
      # step 6
      # expect(page).to have_content("Do you have permission to live and work in the UK for at least 3 years?")
      # choose("Yes")
      # click_button("Continue")

      # step 7
      # expect(page).to have_content("Can you commit to caring for the children until they are 18 or for at least 3 years?")
      # choose("Yes")
      # click_button("Continue")

      # step 8
      # expect(page).to have_content("You can use this service")
      # application = UnaccompaniedMinor.order("created_at DESC").last
      # expect(application.as_json).to include({
      #   is_eligible: "true",
      # })
      
    end

    it "takes the user to the end of eligibility path and shows question 3 if 2 is answered NO" do
      visit "/unaccompanied-minor/start"
      expect(page).to have_content("Apply for permission to sponsor a child fleeing Ukraine without a parent")

      click_link("Start now")

      expect(page).to have_content("Check if you can use this service")

      click_link("Continue")

      # step 1
      expect(page).to have_content("Is the child you want to sponsor under 18?")
      choose("Yes")
      click_button("Continue")

      # step 2
      expect(page).to have_content("Were they living in Ukraine on 31 December 2021?")
      choose("No")
      click_button("Continue")

      # step 3
      expect(page).to have_content("Was the child born after 31 December 2021?")
      choose("Yes")
      click_button("Continue")
 
      
      # step 4
      expect(page).to have_content("Are they travelling to the UK with a parent or legal guardian?")
      choose("Yes")
      click_button("Continue")

      # step 5
      expect(page).to have_content("Do they have a parent or legal guardian that can provide written consent?")
      choose("Yes")
      click_button("Continue")
     
      # step 6
      # expect(page).to have_content("Do you have permission to live and work in the UK for at least 3 years?")
      # choose("Yes")
      # click_button("Continue")

      # step 7
      # expect(page).to have_content("Can you commit to caring for the children until they are 18 or for at least 3 years?")
      # choose("Yes")
      # click_button("Continue")

      # step 8
      # expect(page).to have_content("You can use this service")
      # application = UnaccompaniedMinor.order("created_at DESC").last
      # expect(application.as_json).to include({
      #   is_eligible: "true",
      # })
      
    end

    ### THE FOLLOWING TESTS MIGHT BE OBSOLETE AND WILL NEED REFACTORING ###

    # it "without parental consent form terminates early" do
    #   visit "/unaccompanied-minor/check"
    #   expect(page).to have_content("Check if you can use this service")

    #   click_link("Continue")
      
    #   choose("Yes")
    #   click_button("Continue")

    #   fill_in("What is the name of the child you want to sponsor?", with: "John Smith")
    #   click_button("Continue")

    #   fill_in("Day", with: "15")
    #   fill_in("Month", with: "6")
    #   fill_in("Year", with: "2017")
    #   click_button("Continue")

    #   expect(page).to have_content("Have you received both parental consent forms for John Smith?")
    #   choose("No")
    #   click_button("Continue")

    #   expect(page).to have_content("You cannot apply without completed parental consent forms")
    # end

    # it "saves all of the answers in the database" do
    #   visit "/unaccompanied-minor/check"
    #   expect(page).to have_content("Check if you can use this service")

    #   click_link("Continue")

    #   fill_in("What is the name of the child you want to sponsor?", with: "John Smith")
    #   click_button("Continue")

    #   fill_in("Day", with: "15")
    #   fill_in("Month", with: "6")
    #   fill_in("Year", with: "2017")
    #   click_button("Continue")

    #   expect(page).to have_content("Have you received both parental consent forms for John Smith?")
    #   choose("Yes")
    #   click_button("Continue")

    #   expect(page).to have_content("Upload the UK local authority parental consent form for John Smith")

    #   test_file_path = File.join(File.dirname(__FILE__), "..", "uk-test-document.pdf")

    #   Rails.logger.debug File.exist? test_file_path

    #   attach_file("unaccompanied-minor-uk-parental-consent-field", test_file_path)
    #   click_button("Upload")

    #   expect(page).to have_content("Upload the Ukraine parental consent form for John Smith")

    #   test_file_path = File.join(File.dirname(__FILE__), "..", "ukraine-test-document.pdf")

    #   Rails.logger.debug File.exist? test_file_path

    #   attach_file("unaccompanied-minor-ukraine-parental-consent-field", test_file_path)
    #   click_button("Upload")

    #   fill_in("What is your name?", with: "Jane Doe")
    #   click_button("Continue")

    #   fill_in("What is your email address?", with: "jane.doe@test.com")
    #   click_button("Continue")

    #   fill_in("What is your telephone number?", with: "07777 888 999")
    #   click_button("Continue")

    #   fill_in("Address line 1", with: "House number and Street name")
    #   fill_in("Town", with: "Some Town or City")
    #   fill_in("Postcode", with: "XX1 1XX")
    #   click_button("Continue")

    #   fill_in("Day", with: "6")
    #   fill_in("Month", with: "11")
    #   fill_in("Year", with: "1987")
    #   click_button("Continue")

    #   page.check("unaccompanied-minor-agree-privacy-statement-true-field")
    #   click_button("Continue")

    #   expect(page).to have_content("Child name John Smith")
    #   expect(page).to have_content("Child DoB 15 June 2017")
    #   expect(page).to have_content("Parental consent Yes")
    #   expect(page).to have_content("UK consent uk-test-document.pdf")
    #   expect(page).to have_content("Ukraine consent ukraine-test-document.pdf")
    #   expect(page).to have_content("Name Jane Doe")
    #   expect(page).to have_content("Email jane.doe@test.com")
    #   expect(page).to have_content("Telephone number 07777 888 999")
    #   expect(page).to have_content("Residential address House number and Street name")
    #   expect(page).to have_content("Sponsor DoB 6 November 1987")
    #   expect(page).to have_content("Privacy statement Agreed")

    #   click_button("Accept and send")

    #   expect(page).to have_content("Application complete")
    #   expect(page).to have_content("We've sent your application to your local council.")

    #   application = UnaccompaniedMinor.order("created_at DESC").last
    #   expect(application.as_json).to include({
    #     minor_fullname: "John Smith",
    #     minor_date_of_birth: { "1" => 2017, "2" => 6, "3" => 15 },
    #     have_parental_consent: "yes",
    #     uk_parental_consent_filename: "uk-test-document.pdf",
    #     uk_parental_consent_file_type: "application/pdf",
    #     ukraine_parental_consent_filename: "ukraine-test-document.pdf",
    #     ukraine_parental_consent_file_type: "application/pdf",
    #     fullname: "Jane Doe",
    #     email: "jane.doe@test.com",
    #     phone_number: "07777 888 999",
    #     residential_line_1: "House number and Street name",
    #     residential_town: "Some Town or City",
    #     residential_postcode: "XX1 1XX",
    #     sponsor_date_of_birth: { "1" => 1987, "2" => 11, "3" => 6 },
    #     agree_privacy_statement: "true",
    #   })

    #   expect(application.reference).not_to be_nil
    #   expect(application.reference).to start_with("SPON-")
    #   expect(application.certificate_reference).not_to be_nil
    #   expect(application.certificate_reference).to start_with("CERT-")
    #   expect(application.certificate_reference).to match(/CERT-[A-Z]{4}-[0-9]{4}-[A-Z]/)
    #   expect(application.ip_address).to eq("127.0.0.1")
    #   expect(application.user_agent).to eq("DummyBrowser")
    #   expect(application.started_at).to match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d*Z/)
    # end
  end
end
