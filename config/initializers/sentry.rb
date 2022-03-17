Sentry.init do |config|

  config.traces_sample_rate = 0.5
end

Sentry.init do |config|
  config.breadcrumbs_logger = %i[active_support_logger http_logger]
  config.enabled_environments = %w[production staging]

  config.traces_sampler = lambda do |sampling_context|
    # if this is the continuation of a trace, just use that decision (rate controlled by the caller)
    unless sampling_context[:parent_sampled].nil?
      next sampling_context[:parent_sampled]
    end

    # transaction_context is the transaction object in hash form
    # keep in mind that sampling happens right after the transaction is initialized
    # for example, at the beginning of the request
    transaction_context = sampling_context[:transaction_context]

    # transaction_context helps you sample transactions with more sophistication
    # for example, you can provide different sample rates based on the operation or name
    op = transaction_context[:op]
    transaction_name = transaction_context[:name]

    case op
    when /request/
      # for Rails applications, transaction_name would be the request's path (env["PATH_INFO"]) instead of "Controller#action"
      case transaction_name
      when /health_check/
        0.0
      else
        0.1
      end
    when /sidekiq/
      0.01 # you may want to set a lower rate for background jobs if the number is large
    else
      0.0 # ignore all other transactions
    end
  end
end
