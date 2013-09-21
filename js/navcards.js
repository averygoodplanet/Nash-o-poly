
  $(document).ready(function () {

    // jQuery calls look like $('# ') where the text inside is the id
    $('#navbar li').hover(
      function () {
        //show its submenu
        $('ul', this).stop().slideDown(100);
        this.value('class', 'selected');

      },
      function () {
        //hide its submenu
        $('ul', this).stop().slideUp(100);
        this.value('class', 'unselected');
      }
    );

  });