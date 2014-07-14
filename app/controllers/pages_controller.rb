class PagesController < ApplicationController

  def index
    pages = Project.find(params[:project_id]).pages
    render json: pages.to_json
  end

  def create
    
    page = Page.create(page_params)
    render json: page.to_json
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