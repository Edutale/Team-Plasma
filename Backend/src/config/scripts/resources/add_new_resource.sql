-- add a resource
insert into Resources(resource_id, resource_name, resource_link, resource_description, resource_type)
values($1, $2, $3, $4, $5);