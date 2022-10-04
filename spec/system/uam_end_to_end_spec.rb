RSpec.describe "Unaccompanied minor full journey", type: :system do
  let(:task_list_content) { "Apply for approval to provide a safe home for a child from Ukraine" }
  let(:minors_dob) { Time.zone.now - 4.years }

  before do
    driven_by(:rack_test_user_agent)
  end

  describe "entering minimum valid details" do
    it "creates valid JSON to transfer to foundry" do
      uam_enter_valid_complete_eligibity_section
      uam_start_page_to_task_list
      uam_click_task_list_link("Name")
      uam_enter_sponsor_name
      uam_sponsor_known_by_another_name

      ## SEE confirm_page_spec for duplication!
      #### Contact details
      uam_click_task_list_link("Contact details")
      uam_enter_sponsor_contact_details
      # check_sections_complete(0)
      ###########################

      ### Additional details
      uam_click_task_list_link("Additional details")

      uam_enter_sponsor_additional_details
      # check_sections_complete(1)

      ###################

      uam_click_task_list_link("Address")
      uam_enter_residential_address

      # check_sections_complete(2)
      #####################################

      uam_click_task_list_link("Child's personal details")
      uam_enter_childs_personal_details

      ###############################################

      uam_click_task_list_link("Upload UK consent form")
      uam_upload_consent_forms
      # check_sections_complete(3)

      ##################################################
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
      # check_sections_complete(4)

      click_link("Check your answers and send")
      expect(page).to have_content("Check your answers before sending your application")
      find("button[type=submit]").click
      ##################################################
      app_ref = page.get_rack_session_key("app_reference")
      application = UnaccompaniedMinor.find_by_reference(app_ref)
      json = application.prepare_transfer

      # puts json

      expect(json).to match_schema("unaccompanied_minor")
    end
  end
end
