import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    input: String;
  giliran: String = "Giliran 1";
  jawaban: String = "*****<br>*****<br>*****<br>*****<br>*****";
  menang: String;

  hitung() {
    var inputs = this.input.split(",");
    var row = parseInt(inputs[0]);
    var col = parseInt(inputs[1]);

    var gil = this.giliran.split(" ");
    var giliran = gil[1];

    var splitJawaban = this.jawaban.split("<br>");

    var proses = new Array();
    for (var i = 0; i < 5; i++) {
      proses[i] = splitJawaban[i].split("");
    }

    proses[row - 1][col - 1] = giliran;

    //cek kondisi menang
    var menang = "0";
    var counter = 0;

    //horizontal
    for (var i = 0; i < 5; i++) {
      counter = 0;
      for (var j = 0; j < 5; j++) {
        if (proses[i][j] == giliran) {
          counter++;
        } else {
          counter = 0;
        }
      }
      if (counter >= 4) {
        menang = giliran;
      }
    }

    //vertikal
    if (menang == "0") {
      for (var i = 0; i < 5; i++) {
        counter = 0;
        for (var j = 0; j < 5; j++) {
          if (proses[j][i] == giliran) {
            counter++;
          } else {
            counter = 0;
          }
        }
        if (counter >= 4) {
          menang = giliran;
        }
      }
    }

    //gabungin lagi arraynya jadi string

    var gabung = new Array();

    for (var i = 0; i < 5 - 1; i++) {
      proses[i].push("<br>");
      gabung[i] = proses[i].join("");
    }
    gabung[5 - 1] = proses[5 - 1].join("");

    var jawabanFix = gabung.join("");
    this.jawaban = jawabanFix;

    if (menang != "0") {
      this.pemenang =
        "Pemenangnya adalah " + giliran + " !";
    } else {
      if (giliran == "1") {
        giliran = "2";
      } else {
        giliran = "1";
      }

      this.giliran = "Giliran " + giliran;
    }
  }
}
