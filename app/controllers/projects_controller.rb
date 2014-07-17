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



# {
#   "_json" => [
#       {
#         "id" => 59,
#         "name" => "Chapter 2",
#         "text" => nil,
#         "description" => nil,
#         "project_id" => 63,
#         "parent_id" => nil,
#         "created_at" => "2014-07-15T01:46:00.927Z",
#         "updated_at" => "2014-07-15T23:18:02.604Z",
#         "left" => "660",
#         "top" => "101",
#         "height" => "196",
#         "width" => "370"
#       },  
#       {
#         "id" => 58,
#         "name" => "Chapter 1",
#         "text" => nil,
#         "description" => nil,
#         "project_id" => 63,
#         "parent_id" => nil,
#         "created_at" => "2014-07-15T01:45:59.373Z",
#         "updated_at" => "2014-07-15T23:18:02.615Z",
#         "left" => "221",
#         "top" => "70",
#         "height" => "247",
#         "width" => "344"
#       }
#   ],
#   "controller" => "projects",
#   "action" => "update",
#   "project_id" => "63",
#   "project" => {}
# }