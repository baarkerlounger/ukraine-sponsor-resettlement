class S3BucketController < ApplicationController
  def list_objects
    @objects = S3Object.new

    @service = StorageService.new(PaasConfigurationService.new, ENV["INSTANCE_NAME"])

    resp = @service.list_objects

    Rails.logger.debug "****************************************************************"
    Rails.logger.debug "Bucket response: #{resp}"
    Rails.logger.debug "****************************************************************"

    @objects.contents = resp
  end
end
