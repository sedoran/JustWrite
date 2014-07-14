class PagesController < ApplicationController

  def index
    pages = Project.find(params[:project_id]).pages
    render json: pages.to_json
  end

  def create
    project = Project.find(params[:project_id])
    page = Page.create(page_params)
    project.pages << page
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
    params.require(:page).permit(:name, :text, :description)
  end

end