
on dragge une recrue :
Recrutement > dragRecrueStart > reset_hovered_slot

on survole un slot dans un groupe :
RaidGroup > onDragOver : hoverSlot > register_hovered_slot

quand on leave un groupe (on va juste masquer l'effet visuel sur le groupe
survolé, on garde en mémoire le slot pr l'instant) :
RaidGroup > onDragLeave : hideSlots

on droppe la recrue :
Recrutement > dragRecrueEnd > add_to_group
