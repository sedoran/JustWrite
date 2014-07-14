class ProjectsController < ApplicationController

  def index
    projects = Project.all
    render json: projects.to_json
  end

  def create
    project = Project.create(project_params)
    render json: project.to_json
  end

  def show
  end

  def update
    
  end

  def destroy
  end
  
  private

  def project_params
    params.require(:project).permit(:name)
  end

end