class SessionController < ApplicationController
	def create
		user = User.from_omniauth(env["omniauth.auth"])
		session[:user_id] = user.id
		redirect_to root_url, notice: "Signed in!"
	end

	def destroy
		session[:user] = nil
		redirect_to auth_twitter_callback_path, notice: "Signed out!"
	end
end