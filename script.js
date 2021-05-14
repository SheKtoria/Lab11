/* этот код помечает картинки, для удобства разработки */
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');
      // обычно лучше использовать CSS-классы,
      // но этот код - для удобства разработки, так что не будем трогать стили
      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    /* конфигурация */
    var width = 140; // ширина изображения
    var count = 3; // количество изображений

    var container = document.getElementById('container');
	var gallery = document.getElementById('gall');
    var list = container.querySelector('ul');
    var listElems = container.querySelectorAll('li');

    var position = 0; // текущий сдвиг влево
	var time = 0.25;

    container.querySelector('.prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
	  list.style.transition = time + 's';
    };

    container.querySelector('.next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
	  list.style.transition = time + 's';
    };
	
	acceptnum.onclick = function() {
	gallery.style.width = document.getElementById("numcount").value * 140 + "px";
	container.style.width = document.getElementById("numcount").value * 140 + "px";
	count = document.getElementById("numcount").value;
	};
	
	acceptspeed.onclick = function() {
	time = document.getElementById("animspeed").value;
	};