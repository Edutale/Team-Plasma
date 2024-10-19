-- gets the resources for a given quest.
select resource_name, resource_link, resource_description
from Quest q, Resources r, Quest_Resources qr
where q.quest_id = $1
      and q.quest_id = qr.quest_id
      and qr.resource_id = r.resource_id;