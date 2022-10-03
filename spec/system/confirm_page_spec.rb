RSpec.describe "Unaccompanied minor other adults", type: :system do
  let(:completed_task_list_content) { "You have completed 4 of 4 sections." }
  let(:minors_dob) { Time.zone.now - 4.years }
  let(:sponsor_dob) { Time.zone.now - 20.years }
  let(:task_list_path) { "/sponsor-a-child/task-list" }
  let(:task_list_content) { "Apply for approval to provide a safe home for a child from Ukraine" }

  describe "user completes their application" do
    before do
      driven_by(:rack_test_user_agent)

      new_application = UnaccompaniedMinor.new
      new_application.save!

      page.set_rack_session(app_reference: new_application.reference)
    end

    it "shows reference number on confirm page" do
      uam_enter_valid_complete_eligibity_section
      uam_start_page_to_task_list
      uam_click_task_list_link("Name")
      uam_enter_sponsor_name
      uam_sponsor_known_by_another_name

      check_sections_complete(0)

      uam_click_task_list_link("Contact details")
      uam_enter_sponsor_contact_details
      check_sections_complete(0)

      uam_click_task_list_link("Additional details")

      uam_enter_sponsor_additional_details
      check_sections_complete(1)

      uam_click_task_list_link("Address")
      uam_enter_residential_address
      check_sections_complete(2)

      uam_click_task_list_link("Child's personal details")
      uam_enter_childs_personal_details
      check_sections_complete(2)

      click_link("Upload UK consent form")
      expect(page).to have_content("You must upload 2 completed parental consent forms")
      click_button("Continue")

      expect(page).to have_content("Upload the UK sponsorship arrangement consent form")
      test_file_path = File.join(File.dirname(__FILE__), "..", "uk-test-document.pdf")
      attach_file("unaccompanied-minor-uk-parental-consent-field", test_file_path)
      click_button("Continue")

      click_link("Upload Ukrainian consent form")

      expect(page).to have_content("Upload the Ukraine certified consent form")
      test_file_path = File.join(File.dirname(__FILE__), "..", "ukraine-test-document.pdf")
      attach_file("unaccompanied-minor-ukraine-parental-consent-field", test_file_path)
      click_button("Continue")

      expect(page).to have_content(task_list_content)
      check_sections_complete(3)

      click_link("Confirm we can use your data")

      expect(page).to have_content("Confirm you have read the privacy statement and all people involved agree that the information you have provided can be used for the Homes for Ukraine scheme")
      check("unaccompanied_minor[privacy_statement_confirm]")
      click_button("Continue")

      expect(page).to have_content(task_list_content)

      click_link("Confirm your eligibility")
      expect(page).to have_content("Confirm your eligibility to sponsor a child from Ukraine")
      check("unaccompanied_minor[sponsor_declaration]")
      click_button("Continue")

      expect(page).to have_content(task_list_content)
      check_sections_complete(4)

      click_link("Check your answers and send")
      expect(page).to have_content("Check your answers before sending your application")

      find("button[type=submit]").click

      expect(page).to have_content("SPON-")
      visit "/sponsor-a-child/confirm"
      expect(page).to have_content("SPON-")

      page.set_rack_session(app_reference: nil)
      visit "/sponsor-a-child/confirm"
      expect(page).to have_content("Use this service to apply for approval to sponsor a child fleeing Ukraine, who is not travelling with or joining their parent or legal guardian in the UK.")
    end

    def check_sections_complete(complete_sections)
      expect(page).to have_content("You have completed #{complete_sections} of 4 sections.")
    end
  end
end
