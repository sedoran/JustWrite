class PagesController < ApplicationController

  def index
    pages = Page.all 
    render json: pages.to_json
  end

  def create
    page = Page.create(page_params)
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def page_params
    params.require(:page).permit(:name)
  end

end