$(document).ready(() => {
  // Thêm "<span class='close'>x</span>" vào từng thẻ li
  $("li").append("<span class='close'>x</span>");
  // Xử lý sự kiện click vào nút [x]
  $("span.close").click(function(){
    $(this).parent().remove();
  })
  // Xử lý sự kiện click vào mỗi li
  $("li").click(function(){
    $(this).toggleClass("checked");
  })
  // Xử lý sự kiện click vào nút [Add]
  $(".btn-add").click(function () {
    // Lấy string trong input text
    let value = $("#input").val();

    // Xác thực dữ liệu: Không được để trống input text
    // Code here...
    if (value === "") {
      alert("Vui long dien cong viec.").html();
    }
    // Tạo thẻ "li" với text content là value
    let li = document.createElement("li");
    // Tương tự trong JS DOM: li.innerHTML = value;
    $(li).text(value);

    // Thêm li mới vừa tạo vào phần tử con đầu tiên của ul
    // Code here...
    $("#to-do-list").prepend(li);
    // Reset lại value của input text là rỗng
    // Code here...
    $("#input").val("");
    // Tạo nút close cho thẻ li, gắn class và thêm nút này vào li
    // Code here...
    $(li).append("<span class='close'>x</span>");
    // Xử lý sự kiện khi nhấn nút close
    // Code here...
    $("span.close").click(function(){
      $(this).parent().remove();
    })
    // Xử lý sự kiện khi nhấn vào li
    // Code here...
    $(li).click(function(){
      $(this).toggleClass("checked");
    })
  });
});
//refactor
