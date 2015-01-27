class UsersController < ApplicationController
	
	def index
		if current_user
			@user = current_user
		else
    	redirect_to new_user_path, notice: "Please log in"
  	end
	end

	def create
		
	end

	def new
		
	end

	def show
		
	end

	def edit
		
	end

	def update
		
	end

	def destroy
		
	end
	
end