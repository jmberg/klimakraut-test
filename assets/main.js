---
---
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function update()
{
    filters = document.getElementsByClassName("filter");
    selected = {};
    any = false;
    for (i = 0; i < filters.length; i++) {
        filter = filters[i];
        selected[filter.id] = filter.checked;
        if (filter.checked)
            any = true;
    }
    if (!any) {
        for (k in selected)
            selected[k] = true;
    }

    visible = [];
    for (k in selected)
      if (selected[k])
        visible.push(k);

    items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
      item = items[i];
      show = false;
      for (j = 0; j < visible.length; j++) {
        vis = visible[j];
        if (hasClass(item, 'filter-' + vis)) {
          show = true;
          break;
        }
      }
      item.style.display = show ? 'block' : 'none';
    }
}
