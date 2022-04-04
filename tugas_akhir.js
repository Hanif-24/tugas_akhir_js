function buat_login(){
  var hapus = document.getElementById('x');
  hapus.parentElement.removeChild(hapus);

  var p = document.createElement('p');
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";

  var kotak = document.getElementsByTagName('div')[0];
  kotak.appendChild(p);

  var form = document.createElement('form');
  kotak.appendChild(form);

  var nama = document.createElement('label');
  nama.className = "label";
  nama.innerHTML = "Nama User";
  form.appendChild(nama);

  var namainput = document.createElement('input');
  namainput.type = "text";
  namainput.name = "nama";
  namainput.className = "form_login";
  namainput.placeholder = "Nama User..."
  form.appendChild(namainput);

  var hp = document.createElement('label');
  hp.className = "label";
  hp.innerHTML = "Nomor Handphone";
  form.appendChild(hp);

  var hpinput = document.createElement('input');
  hpinput.type = "text";
  hpinput.name = "hp";
  hpinput.className = "form_login";
  hpinput.placeholder = "Nomor Handphone..."
  form.appendChild(hpinput);

  var username = document.createElement('label');
  username.className = "label";
  username.innerHTML = "Username";
  form.appendChild(username);

  var userinput = document.createElement('input');
  userinput.type = "text";
  userinput.name = "username";
  userinput.className = "form_login";
  userinput.placeholder = "Username atau email..."
  form.appendChild(userinput);

  var password = document.createElement('label');
  password.className = "label";
  password.innerHTML = "Password";
  form.appendChild(password);

  var passinput = document.createElement('input');
  passinput.type = "password";
  passinput.name = "password";
  passinput.className = "form_login";
  passinput.placeholder = "Password..."
  form.appendChild(passinput);

  var lanjut = document.createElement('button');
  lanjut.innerHTML = "DAFTAR SEKARANG";
  lanjut.className = "tombol_login";
  form.appendChild(lanjut);
}
