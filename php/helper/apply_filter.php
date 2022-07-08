<?php
    /*
     * Specify what kind of records to search.
     */
    function applyFilter($filter, $is_first_filter) {
        global $query;
        $and_keyword = " ";
        $value = $_GET[$filter];

        // Determines whether this filter is added on top of an initial filter.
        if (!$is_first_filter) {
            $and_keyword = " and ";
        }
        // Default value if filter is does not specify.
        if ($filter != "name" && ($value == 0 || $value == "")) {
            $value = $filter;
        }
        // Append to query.
        if ($filter == "name") {
            $query = $query . $and_keyword . $filter . " like '%" . $value . "%'";
        } else {
            $query = $query . $and_keyword . $filter . " = " . $value;
        }
    }
?>