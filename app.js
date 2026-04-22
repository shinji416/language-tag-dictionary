const languageCatalog = {
  javascript: {
    name: "JavaScript",
    aliases: ["javascript", "js", "node", "nodejs", "ジャバスクリプト"],
    description: "Web開発で広く使われる言語。ブラウザとサーバーの両方で利用できます。",
    tags: [
      { tag: "let", reading: "レット", meaning: "再代入可能な変数宣言", usage: "ブロックスコープの変数を定義", example: "let count = 0;" },
      { tag: "const", reading: "コンスト", meaning: "再代入不可の変数宣言", usage: "変更しない参照を定義", example: "const API_URL = '/api';" },
      { tag: "function", reading: "ファンクション", meaning: "関数定義", usage: "再利用できる処理をまとめる", example: "function add(a, b) { return a + b; }" },
      { tag: "if", reading: "イフ", meaning: "条件分岐", usage: "条件が真のときに処理実行", example: "if (isAdmin) { showPanel(); }" },
      { tag: "for", reading: "フォー", meaning: "反復処理", usage: "回数や配列を順番に処理", example: "for (let i = 0; i < 3; i++) {}" },
      { tag: "async", reading: "エーシンク", meaning: "非同期関数宣言", usage: "awaitを使う関数に付ける", example: "async function loadData() {}" },
      { tag: "await", reading: "アウェイト", meaning: "Promise完了待機", usage: "async関数内で非同期処理を待つ", example: "const data = await fetchJson();" },
      { tag: "try...catch", reading: "トライキャッチ", meaning: "例外処理", usage: "エラー発生時の処理を分岐", example: "try { run(); } catch (e) { log(e); }" },
      { tag: "map", reading: "マップ", meaning: "配列変換メソッド", usage: "各要素を加工して新しい配列作成", example: "const ids = users.map(u => u.id);" },
      { tag: "filter", reading: "フィルター", meaning: "配列絞り込みメソッド", usage: "条件に合う要素だけを抽出", example: "const active = users.filter(u => u.active);" }
    ]
  },
  python: {
    name: "Python",
    aliases: ["python", "py", "パイソン"],
    description: "読みやすさ重視の言語。データ分析、AI、Web開発まで幅広く使われます。",
    tags: [
      { tag: "def", reading: "デフ", meaning: "関数定義", usage: "処理を関数としてまとめる", example: "def add(a, b): return a + b" },
      { tag: "class", reading: "クラス", meaning: "クラス定義", usage: "オブジェクト指向の設計を行う", example: "class User:" },
      { tag: "if", reading: "イフ", meaning: "条件分岐", usage: "条件に応じて処理を分ける", example: "if score >= 80:" },
      { tag: "for", reading: "フォー", meaning: "反復処理", usage: "シーケンスを順番に処理", example: "for item in items:" },
      { tag: "while", reading: "ワイル", meaning: "条件付きループ", usage: "条件が真の間繰り返す", example: "while n > 0:" },
      { tag: "import", reading: "インポート", meaning: "モジュール読み込み", usage: "外部モジュールを利用する", example: "import math" },
      { tag: "with", reading: "ウィズ", meaning: "コンテキスト管理", usage: "ファイルや接続の後処理を自動化", example: "with open('a.txt') as f:" },
      { tag: "try...except", reading: "トライエクセプト", meaning: "例外処理", usage: "エラー時の挙動を定義する", example: "try: run() except Exception: pass" },
      { tag: "lambda", reading: "ラムダ", meaning: "無名関数", usage: "短い関数を1行で定義", example: "square = lambda x: x * x" },
      { tag: "async/await", reading: "エーシンクアウェイト", meaning: "非同期処理", usage: "I/O待ち処理を効率化する", example: "async def fetch_data():" }
    ]
  },
  java: {
    name: "Java",
    aliases: ["java", "ジャバ"],
    description: "業務システムやAndroid開発で定番の静的型付け言語です。",
    tags: [
      { tag: "class", reading: "クラス", meaning: "クラス定義", usage: "オブジェクトの設計図を作る", example: "class User { }" },
      { tag: "public", reading: "パブリック", meaning: "公開アクセス修飾子", usage: "どこからでもアクセス可能にする", example: "public class Main { }" },
      { tag: "private", reading: "プライベート", meaning: "非公開アクセス修飾子", usage: "同一クラス内でのみ利用可能", example: "private int count;" },
      { tag: "static", reading: "スタティック", meaning: "クラスメンバー化", usage: "インスタンス不要のメンバーを作る", example: "public static void main(...)" },
      { tag: "void", reading: "ボイド", meaning: "戻り値なし", usage: "戻り値を返さないメソッドに付与", example: "void reset() { }" },
      { tag: "if", reading: "イフ", meaning: "条件分岐", usage: "条件が真の時に処理", example: "if (ok) { run(); }" },
      { tag: "for", reading: "フォー", meaning: "反復処理", usage: "配列や回数ループを処理", example: "for (int i = 0; i < 5; i++) { }" },
      { tag: "try...catch", reading: "トライキャッチ", meaning: "例外処理", usage: "例外発生時の処理を記述", example: "try { io(); } catch (IOException e) { }" },
      { tag: "interface", reading: "インターフェース", meaning: "契約定義", usage: "実装すべきメソッド仕様を定義", example: "interface Repository { }" },
      { tag: "extends", reading: "エクステンズ", meaning: "継承", usage: "既存クラスを拡張する", example: "class Dog extends Animal { }" }
    ]
  },
  csharp: {
    name: "C#",
    aliases: ["c#", "csharp", "cs", "シーシャープ"],
    description: ".NETで使われる言語。Web、デスクトップ、ゲーム開発まで対応します。",
    tags: [
      { tag: "namespace", reading: "ネームスペース", meaning: "名前空間定義", usage: "クラス名の衝突を防ぐ", example: "namespace App.Core { }" },
      { tag: "using", reading: "ユージング", meaning: "名前空間の取り込み", usage: "型名を短く記述できる", example: "using System;" },
      { tag: "class", reading: "クラス", meaning: "クラス定義", usage: "オブジェクトの型を定義する", example: "class User { }" },
      { tag: "public", reading: "パブリック", meaning: "公開アクセス修飾子", usage: "外部からアクセス可能にする", example: "public int Id { get; set; }" },
      { tag: "async", reading: "エーシンク", meaning: "非同期メソッド", usage: "await可能なメソッドを定義", example: "public async Task LoadAsync() { }" },
      { tag: "await", reading: "アウェイト", meaning: "非同期待機", usage: "Taskの完了を待って処理継続", example: "await client.GetAsync(url);" },
      { tag: "var", reading: "ヴァー", meaning: "型推論変数", usage: "右辺から型を推論して宣言", example: "var count = 10;" },
      { tag: "record", reading: "レコード", meaning: "不変データ向け型", usage: "値ベース比較に向いた型を定義", example: "record User(string Name);" },
      { tag: "LINQ", reading: "リンク", meaning: "クエリ構文", usage: "コレクションを宣言的に操作", example: "var adults = users.Where(u => u.Age >= 20);" },
      { tag: "try...catch", reading: "トライキャッチ", meaning: "例外処理", usage: "エラー時の回復処理を記述", example: "try { Run(); } catch (Exception ex) { }" }
    ]
  },
  html: {
    name: "HTML",
    aliases: ["html", "エイチティーエムエル"],
    description: "Webページの構造を定義するマークアップ言語です。",
    tags: [
      { tag: "<div>", reading: "ディブ", meaning: "汎用ブロック要素", usage: "レイアウトのまとまりを作る", example: "<div class=\"card\"></div>" },
      { tag: "<a>", reading: "エー", meaning: "リンク要素", usage: "別ページやURLへ遷移する", example: "<a href=\"/about\">About</a>" },
      { tag: "<img>", reading: "イメージ", meaning: "画像表示要素", usage: "画像ファイルを埋め込む", example: "<img src=\"logo.png\" alt=\"logo\">" },
      { tag: "<form>", reading: "フォーム", meaning: "入力フォーム要素", usage: "ユーザー入力を送信する枠", example: "<form method=\"post\"></form>" },
      { tag: "<input>", reading: "インプット", meaning: "入力フィールド", usage: "文字列や数値などを入力", example: "<input type=\"email\" name=\"mail\">" },
      { tag: "<button>", reading: "ボタン", meaning: "押下ボタン", usage: "送信や処理実行のトリガー", example: "<button type=\"submit\">送信</button>" },
      { tag: "<header>", reading: "ヘッダー", meaning: "ページ先頭領域", usage: "ロゴやタイトルをまとめる", example: "<header>Site Header</header>" },
      { tag: "<main>", reading: "メイン", meaning: "主要コンテンツ領域", usage: "ページ中心内容を示す", example: "<main>...</main>" },
      { tag: "<section>", reading: "セクション", meaning: "意味のある区画", usage: "関連内容をまとまりで区切る", example: "<section><h2>News</h2></section>" },
      { tag: "<article>", reading: "アーティクル", meaning: "独立した記事", usage: "単体で完結する本文を表現", example: "<article>...</article>" }
    ]
  },
  css: {
    name: "CSS",
    aliases: ["css", "シーエスエス"],
    description: "Webページの見た目を指定するスタイルシート言語です。",
    tags: [
      { tag: ".class", reading: "ドットクラス", meaning: "クラスセレクタ", usage: "同じ見た目を複数要素に適用", example: ".card { border-radius: 8px; }" },
      { tag: "#id", reading: "シャープアイディー", meaning: "IDセレクタ", usage: "特定要素1つを指定して装飾", example: "#hero { background: #fff; }" },
      { tag: "display", reading: "ディスプレイ", meaning: "表示形式", usage: "要素のレイアウト特性を決定", example: "display: block;" },
      { tag: "flex", reading: "フレックス", meaning: "柔軟な1次元レイアウト", usage: "横並び・縦並び調整が容易", example: "display: flex; gap: 12px;" },
      { tag: "grid", reading: "グリッド", meaning: "2次元レイアウト", usage: "行列構造で要素を配置", example: "display: grid; grid-template-columns: 1fr 1fr;" },
      { tag: "@media", reading: "アットメディア", meaning: "メディアクエリ", usage: "画面幅に応じてスタイル分岐", example: "@media (max-width: 768px) { ... }" },
      { tag: "position", reading: "ポジション", meaning: "配置基準", usage: "relative/absoluteで位置制御", example: "position: absolute;" },
      { tag: "margin", reading: "マージン", meaning: "外側余白", usage: "要素同士の間隔を調整", example: "margin: 16px 0;" },
      { tag: "padding", reading: "パディング", meaning: "内側余白", usage: "枠と内容の間隔を調整", example: "padding: 12px 16px;" },
      { tag: ":hover", reading: "ホバー", meaning: "マウス重なり状態", usage: "ユーザー操作時の見た目変更", example: "button:hover { opacity: 0.8; }" }
    ]
  },
  sql: {
    name: "SQL",
    aliases: ["sql", "エスキューエル"],
    description: "データベースを操作するための問い合わせ言語です。",
    tags: [
      { tag: "SELECT", reading: "セレクト", meaning: "データ取得", usage: "テーブルから列データを抽出", example: "SELECT id, name FROM users;" },
      { tag: "FROM", reading: "フロム", meaning: "対象テーブル指定", usage: "どのテーブルを参照するか指定", example: "SELECT * FROM orders;" },
      { tag: "WHERE", reading: "ウェア", meaning: "条件指定", usage: "対象行を絞り込む", example: "WHERE status = 'active'" },
      { tag: "JOIN", reading: "ジョイン", meaning: "テーブル結合", usage: "複数テーブルを関連付ける", example: "JOIN profiles p ON p.user_id = u.id" },
      { tag: "GROUP BY", reading: "グループバイ", meaning: "集計グループ化", usage: "同じ値ごとに集計する", example: "GROUP BY department" },
      { tag: "ORDER BY", reading: "オーダーバイ", meaning: "並び替え", usage: "結果を昇順/降順で並べる", example: "ORDER BY created_at DESC" },
      { tag: "INSERT INTO", reading: "インサートイントゥ", meaning: "データ追加", usage: "新規レコードを挿入する", example: "INSERT INTO users(name) VALUES ('A');" },
      { tag: "UPDATE", reading: "アップデート", meaning: "データ更新", usage: "既存レコードの値を変更", example: "UPDATE users SET name = 'B' WHERE id = 1;" },
      { tag: "DELETE", reading: "デリート", meaning: "データ削除", usage: "条件に一致する行を削除", example: "DELETE FROM users WHERE id = 1;" },
      { tag: "CREATE TABLE", reading: "クリエイトテーブル", meaning: "テーブル作成", usage: "新しいテーブル構造を定義", example: "CREATE TABLE users (id INT, name TEXT);" }
    ]
  },
  go: {
    name: "Go",
    aliases: ["go", "golang", "ゴー", "ゴーラン"],
    description: "シンプルさと並行処理の扱いやすさが特徴の言語です。",
    tags: [
      { tag: "package", reading: "パッケージ", meaning: "所属パッケージ宣言", usage: "ファイル先頭でパッケージを定義", example: "package main" },
      { tag: "import", reading: "インポート", meaning: "パッケージ読み込み", usage: "標準/外部パッケージを利用する", example: "import \"fmt\"" },
      { tag: "func", reading: "ファンク", meaning: "関数定義", usage: "関数やメソッドを定義", example: "func add(a int, b int) int { return a + b }" },
      { tag: "if", reading: "イフ", meaning: "条件分岐", usage: "条件に応じて処理を分ける", example: "if err != nil { return err }" },
      { tag: "for", reading: "フォー", meaning: "ループ", usage: "Goの反復はforで統一", example: "for i := 0; i < 10; i++ { }" },
      { tag: "go", reading: "ゴー", meaning: "ゴルーチン起動", usage: "並行処理を開始する", example: "go worker()" },
      { tag: "defer", reading: "ディファー", meaning: "遅延実行", usage: "関数終了時に後処理を実行", example: "defer file.Close()" },
      { tag: "struct", reading: "ストラクト", meaning: "構造体定義", usage: "複数フィールドを持つ型を定義", example: "type User struct { Name string }" },
      { tag: "interface", reading: "インターフェース", meaning: "振る舞いの契約", usage: "実装が満たすメソッド集合を定義", example: "type Reader interface { Read([]byte) (int, error) }" },
      { tag: "error", reading: "エラー", meaning: "エラー値", usage: "戻り値でエラーを明示的に扱う", example: "if err != nil { return err }" }
    ]
  },
  rust: {
    name: "Rust",
    aliases: ["rust", "ラスト"],
    description: "安全性と高速性を両立するシステムプログラミング言語です。",
    tags: [
      { tag: "fn", reading: "エフエヌ", meaning: "関数定義", usage: "関数を宣言する", example: "fn add(a: i32, b: i32) -> i32 { a + b }" },
      { tag: "let", reading: "レット", meaning: "変数束縛", usage: "値を変数に束縛する", example: "let x = 10;" },
      { tag: "mut", reading: "ミュート", meaning: "可変指定", usage: "変更可能な変数として宣言", example: "let mut count = 0;" },
      { tag: "if", reading: "イフ", meaning: "条件分岐", usage: "条件が真なら処理実行", example: "if x > 0 { println!(\"ok\"); }" },
      { tag: "match", reading: "マッチ", meaning: "網羅的分岐", usage: "列挙型や値に応じて分岐", example: "match value { 0 => \"zero\", _ => \"other\" }" },
      { tag: "loop", reading: "ループ", meaning: "無限ループ", usage: "breakまで繰り返す", example: "loop { break; }" },
      { tag: "struct", reading: "ストラクト", meaning: "構造体定義", usage: "複数フィールドの型を定義", example: "struct User { id: u32 }" },
      { tag: "enum", reading: "イーナム", meaning: "列挙型定義", usage: "複数の状態を型として表現", example: "enum Status { Ok, Error }" },
      { tag: "impl", reading: "インプル", meaning: "実装ブロック", usage: "型にメソッドを実装する", example: "impl User { fn new() -> Self { ... } }" },
      { tag: "trait", reading: "トレイト", meaning: "共通振る舞い定義", usage: "型が実装すべき機能を定義", example: "trait Render { fn render(&self); }" }
    ]
  }
};

const coreConcepts = {
  javascript: [
    { kind: "変数", tag: "let / const", reading: "レット / コンスト", meaning: "値を保持するための宣言", usage: "再代入する値はlet、固定値はconstを使う", example: "const name = 'Taro'; let count = 0;" },
    { kind: "関数", tag: "function / =>", reading: "ファンクション / アロー", meaning: "処理のまとまり", usage: "引数を受け取り、必要に応じて値を返す", example: "const add = (a, b) => a + b;" }
  ],
  python: [
    { kind: "変数", tag: "name = ...", reading: "ネーム イコール", meaning: "変数への代入", usage: "型注釈なしで値を代入して使う", example: "name = 'Taro'" },
    { kind: "関数", tag: "def", reading: "デフ", meaning: "関数定義", usage: "defで関数名と引数を定義する", example: "def greet(name):\n    return f'Hello {name}'" }
  ],
  java: [
    { kind: "変数", tag: "int / String など", reading: "イント / ストリング", meaning: "型付き変数宣言", usage: "型を先に書いて変数を宣言する", example: "int count = 0; String name = \"Taro\";" },
    { kind: "関数", tag: "メソッド定義", reading: "メソッド", meaning: "クラス内の関数", usage: "戻り値型 + メソッド名 + 引数で定義", example: "int add(int a, int b) { return a + b; }" }
  ],
  csharp: [
    { kind: "変数", tag: "int / string / var", reading: "イント / ストリング / ヴァー", meaning: "型付きまたは型推論で変数宣言", usage: "明示型かvarで値を保持する", example: "int count = 0; var name = \"Taro\";" },
    { kind: "関数", tag: "メソッド定義", reading: "メソッド", meaning: "クラス内の処理定義", usage: "戻り値型とメソッド名で定義", example: "int Add(int a, int b) => a + b;" }
  ],
  html: [
    { kind: "変数", tag: "（HTML単体ではなし）", reading: "なし", meaning: "変数はJavaScript側で扱う", usage: "<script>内や外部JSで変数を定義する", example: "<script>const title = 'Hello';</script>" },
    { kind: "関数", tag: "（HTML単体ではなし）", reading: "なし", meaning: "関数はJavaScript側で扱う", usage: "イベント属性からJS関数を呼び出す", example: "<button onclick=\"saveData()\">保存</button>" }
  ],
  css: [
    { kind: "変数", tag: "--custom-property", reading: "カスタムプロパティ", meaning: "CSS変数", usage: "再利用したい値を:rootなどで定義する", example: ":root { --main-color: #5fd7ff; }" },
    { kind: "関数", tag: "var() / calc()", reading: "バー / カルク", meaning: "値参照や計算の関数", usage: "var()で変数参照、calc()で式を計算", example: "color: var(--main-color); width: calc(100% - 24px);" }
  ],
  sql: [
    { kind: "変数", tag: "DECLARE", reading: "デクレア", meaning: "SQL変数宣言", usage: "主にストアドプロシージャ内で使う", example: "DECLARE @name NVARCHAR(50) = 'Taro';" },
    { kind: "関数", tag: "COUNT() / SUM()", reading: "カウント / サム", meaning: "集計関数", usage: "列の件数や合計を計算する", example: "SELECT COUNT(*) FROM users;" }
  ],
  go: [
    { kind: "変数", tag: "var / :=", reading: "ヴァー / コロンイコール", meaning: "変数宣言", usage: "varで明示、:=で短縮宣言する", example: "var count int = 0\nname := \"Taro\"" },
    { kind: "関数", tag: "func", reading: "ファンク", meaning: "関数定義", usage: "funcで関数名・引数・戻り値を定義", example: "func add(a int, b int) int { return a + b }" }
  ],
  rust: [
    { kind: "変数", tag: "let / let mut", reading: "レット / レットミュート", meaning: "変数束縛（可変/不可変）", usage: "変更する場合はmutを付ける", example: "let name = \"Taro\";\nlet mut count = 0;" },
    { kind: "関数", tag: "fn", reading: "エフエヌ", meaning: "関数定義", usage: "fnで関数名・引数型・戻り値型を指定", example: "fn add(a: i32, b: i32) -> i32 { a + b }" }
  ]
};

const languageInput = document.getElementById("languageInput");
const showButton = document.getElementById("showButton");
const resultSection = document.getElementById("result");
const messageSection = document.getElementById("message");
const languageTitle = document.getElementById("languageTitle");
const languageDescription = document.getElementById("languageDescription");
const tagFilter = document.getElementById("tagFilter");
const tagTableBody = document.getElementById("tagTableBody");
const languageCandidates = document.getElementById("languageCandidates");

let currentLanguageKey = "";

const aliasToKey = buildAliasMap(languageCatalog);
populateCandidates(languageCatalog, languageCandidates);

showButton.addEventListener("click", handleShow);
languageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleShow();
  }
});

tagFilter.addEventListener("input", () => {
  if (!currentLanguageKey) {
    return;
  }
  renderTags(currentLanguageKey, tagFilter.value);
});

function buildAliasMap(catalog) {
  const map = {};
  Object.keys(catalog).forEach((key) => {
    const entry = catalog[key];
    entry.aliases.forEach((alias) => {
      map[normalize(alias)] = key;
    });
    map[normalize(entry.name)] = key;
  });
  return map;
}

function populateCandidates(catalog, datalist) {
  const candidateSet = new Set();
  Object.values(catalog).forEach((entry) => {
    candidateSet.add(entry.name);
    entry.aliases.forEach((alias) => candidateSet.add(alias));
  });
  [...candidateSet].sort().forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    datalist.appendChild(option);
  });
}

function handleShow() {
  const raw = languageInput.value;
  const normalized = normalize(raw);
  const key = aliasToKey[normalized];

  if (!raw.trim()) {
    showMessage("言語名を入力してください。");
    hideResult();
    return;
  }

  if (!key) {
    showMessage("対応していない言語です。入力例: python / js / java / csharp / html / css / sql / go / rust");
    hideResult();
    return;
  }

  currentLanguageKey = key;
  tagFilter.value = "";
  renderLanguage(key);
  clearMessage();
}

function renderLanguage(key) {
  const entry = languageCatalog[key];
  languageTitle.textContent = `${entry.name} のタグ・関数・変数一覧`;
  languageDescription.textContent = entry.description;
  renderTags(key, "");
  resultSection.classList.remove("hidden");
}

function getDisplayItems(key) {
  const entry = languageCatalog[key];
  const baseItems = entry.tags.map((item) => ({
    kind: item.kind || "キーワード/タグ",
    ...item
  }));
  const extraItems = coreConcepts[key] || [];
  return [...extraItems, ...baseItems];
}

function renderTags(key, keyword) {
  const allItems = getDisplayItems(key);
  const q = normalize(keyword);
  const filtered = allItems.filter((item) => {
    if (!q) {
      return true;
    }
    return [
      normalize(item.kind),
      normalize(item.tag),
      normalize(item.reading),
      normalize(item.meaning),
      normalize(item.usage),
      normalize(item.example)
    ].some((field) => field.includes(q));
  });

  tagTableBody.innerHTML = "";

  if (filtered.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.className = "empty";
    td.textContent = "条件に一致するタグが見つかりませんでした。";
    tr.appendChild(td);
    tagTableBody.appendChild(tr);
    return;
  }

  filtered.forEach((item) => {
    const tr = document.createElement("tr");
    tr.appendChild(createCell(item.kind));
    tr.appendChild(createCell(item.tag));
    tr.appendChild(createCell(item.reading));
    tr.appendChild(createCell(item.meaning));
    tr.appendChild(createCell(item.usage));
    tr.appendChild(createCell(item.example));
    tagTableBody.appendChild(tr);
  });
}

function createCell(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}

function showMessage(message) {
  messageSection.textContent = message;
  messageSection.classList.add("visible");
}

function clearMessage() {
  messageSection.textContent = "";
  messageSection.classList.remove("visible");
}

function hideResult() {
  resultSection.classList.add("hidden");
  currentLanguageKey = "";
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}
