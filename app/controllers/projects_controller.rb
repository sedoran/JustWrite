class ProjectsController < ApplicationController

  def index
    projects = Project.all
    render json: projects.to_json
  end

  def create
    project = Project.create(project_params)
    render json: project.to_json
  end

  def update_pages
    page_array = params[:_json]
    page_array.each_with_index do |page, index|
      Page.find(page['id']).update_attributes(page_params['_json'][index])
    end
    render json: {}
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    render json: project.to_json
  end

  def destroy
    project = Project.find(params[:id])
    project_pages = project.pages
    project_pages.each { |page| page.delete }
    project.delete
    render json: project.to_json
  end
  
  private

  def page_params
    params.permit(:_json => [:id, :name, :text, :description, :project_id, :left, :top, :height, :width, :parent_id, :created_at, :updated_at])
  end

  def project_params
    params.require(:project).permit(:name)
  end

end
