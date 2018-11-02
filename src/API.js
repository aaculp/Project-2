body {
  margin: 0 auto;
  border: 5 px solid black;
}

.App {
  display: -webkit - box;
  display: -ms - flexbox;
  display: flex; -
  webkit - box - orient: vertical; -
  webkit - box - direction: normal; -
  ms - flex - direction: column;
  flex - direction: column;
}

.header {
  display: -webkit - box;
  display: -ms - flexbox;
  display: flex; -
  webkit - box - pack: justify; -
  ms - flex - pack: justify;
  justify - content: space - between; -
  webkit - box - align: center; -
  ms - flex - align: center;
  align - items: center;
  padding - left: 10 px;
  height: 100 px;
  background - color: red;
  color: white;
}
.header h1 {
  font - weight: normal;
  margin - left: 50 px;
}
.header.input {
    display: -webkit - box;
    display: -ms - flexbox;
    display: flex;
    margin - right: 50 px;
    padding - right: 25 px;
    background - color: red;
    color: white;
    font - size: 14 px;
    font - weight: bold;
  }
  .header.input button {
    height: 50 px;
    background - color: red;
    color: white;
  }

  .venue - list {
    display: flex; -
    justify - content: flex - start;
    padding - left: 350 px;
  }

  .venue - section {
    display: flex;
    flex - flow: row wrap;
    align - items: space - between;
    width: 70 % ;
    height: 800 px;
    overflow: scroll;
  }

  .venue - map {
    display: flex;
    flex - direction: row;
  }

  .map {
    width: 30 % ;
    height: 500 px;
  }

  .venue - row {
    width: 25 % ;
  }
  .venue - row.venue - container {
    display: flex;
    flex - direction: column;
    align - items: center;
    width: 100 % ;
    height: 400 px;
  }
  .venue - row.venue - container h1 {
    font - weight: bold;
    text - align: center;
    margin - top: 0;
    padding: 5 px;
    color: white;
    background - color: red;
  }
  .venue - row.venue - container img {
    height: 150 px;
    width: 150 px;
    margin - bottom: 15 px;
  }
  .venue - row.venue - containter - layout {
    color: white;
    background - color: red;
    font - weight: bold;
    font - size: 12 px;
    display: flex;
    flex - direction: column;
    align - items: center;
    width: 100 % ;
    height: 30 % ;
  }
