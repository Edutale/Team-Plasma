--updates a resource's info
update Resources
set resource_name = coalesce($2, resource_name),
    resource_link = coalesce($3, resource_link),
    resource_description = coalesce($4, resource_description),
    resource_type = coalesce($5, resource_type)
where resource_id = $1;