Circular references
===================
tags: no-lang-runner
Get all parse errors
-----------------------------
* open "data/parse-errors/circular-references" and verify diagnostics with no runner

   |line|range_start|range_end|severity|message                                                                                     |uri                                               |
   |----|-----------|---------|--------|--------------------------------------------------------------------------------------------|--------------------------------------------------|
   |3   |0          |10000    |1       |Circular reference found in concept. \"Concept2\" => %project_path%%file_path%:2            |/specs/concepts/duplicateConcepts.cpt             |
   |0   |0          |10000    |1       |Circular reference found in concept. \"Concept1\" => %project_path%%file_path%:5            |/specs/concepts/duplicateConcepts.cpt             |
___
* stop gauge daemon