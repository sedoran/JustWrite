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

  end

  def destroy
    project = Project.find(params[:id])
    project.delete
    render json: project.to_json
  end
  
  private

  def project_params
    params.require(:project).permit(:name)
  end

end