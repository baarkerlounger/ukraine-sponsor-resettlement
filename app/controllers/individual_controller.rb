class IndividualController < ApplicationController
  def display
    @application = Application.new(session[:application])

    render "individual/steps/#{params['stage']}"
  end

  def handle_step
    max_steps = 9
    # Pull session data out of session and
    # instantiate new Application AactiveRecord object
    @application = Application.new(session[:application])
    # Update Application object with new attributes
    @application.assign_attributes(application_params)

    if @application.valid?
      # Update the session
      session[:application] = @application.answers
      next_stage = params["stage"].to_i + 1
      if next_stage > max_steps
        redirect_to "/individual/check_answers"
      else
        redirect_to "/individual/steps/#{next_stage}"
      end
    else
      render "individual/steps/#{params['stage']}"
    end
  end

  def check_answers
    @application = Application.new(session[:application])
  end

  def submit
    @application = Application.new(session[:application])
    @application.save!
    redirect_to "/individual/confirm"
  end

  def confirm;
    @application = Application.new(session[:application])
  end

private

  def application_params
    params.require(:application).permit(:sponsor_type, :family_or_single_type, :living_space_type,
                                        :mobility_impairments_type, :single_room_count, :double_room_count, :postcode,
                                        :accommodation_length_type, :dbs_certificate_type)
  end
end
