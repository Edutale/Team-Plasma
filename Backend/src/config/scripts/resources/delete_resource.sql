--Delete a resource, will make a better one, probably a procedure for cascading but for now a simple implementation that will be refactored/redesigned later
delete from Resources
where resource_id = $1;