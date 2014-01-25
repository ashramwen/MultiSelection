/*
MultiSelect v1

Checkbox in Select

Augustine
2013/6/20
*/
$.fn.multiselect=function(b){var c=$(this).find("div.list-select");$(document).click(function(){$("div.custom-select").find("div.drop-select:visible").slideUp("fast")});$(this).find("div.text-select").on("click",function(a){a.stopPropagation();$("div.text-select").not(this).next("div.drop-select:visible").slideUp("fast");$(this).next("div.drop-select").slideToggle("fast")});$(this).find("input.no-select").on("click",function(a){a.stopPropagation();$(this).parents("div.drop-select").slideToggle("fast")}); $(this).find("input.all-select").on("click",function(a){a.stopPropagation();var b=$(this).is(":checked");c.find('input[type="checkbox"]').each(function(){$(this)[0].checked=b})});$(this).find("input.option-select").on("click",function(a){a.stopPropagation();c.find('input.option-select[type="checkbox"]').each(function(){if(!$(this).is(":checked"))return c.find("input.all-select")[0].checked=!1;c.find("input.all-select")[0].checked=!0})});$(this).find("input.yes-select").on("click",function(a){a.stopPropagation(); void 0!=b&&void 0!=b.YesClick&&b.YesClick();$(this).parents("div.drop-select").slideToggle("fast")})};