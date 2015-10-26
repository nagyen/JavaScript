var skiprows = 0;
$("table.hd-clean-table tbody tr:not(:first-child)").each(function () {
    if (skiprows > 0)
    {
        skiprows = skiprows - 1;
        return true;
    }
    else {
        var firstCell = $(this).find("td:first-child");
        firstCell.addClass("hd-table-first-column");
        if(firstCell.attr("rowspan"))
        {
            skiprows = firstCell.attr("rowspan") - 1;
        }
    }
});
