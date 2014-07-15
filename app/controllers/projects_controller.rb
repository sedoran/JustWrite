class ProjectsController < ApplicationController

  def index
    projects = Project.all
    render json: projects.to_json
  end

  def create
    project = Project.create(project_params)
    render json: project.to_json
  end

  def update
    pageArray =  page_params
    pageArray.each do |page|
      Page.find(page['id']).update_attributes(page)
    end
    #project = Project.find(params[:project_id])
    #project.update(project_params)
    render json: {}
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
    params.permit(_json: [])
    # params.require(_json).permit(:name, :text, :description, :project_id, :left, :top, :height, :width, :id)
  end

  def project_params
    params.require(:project).permit(:name)
  end

end