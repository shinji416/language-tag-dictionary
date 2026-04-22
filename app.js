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
      { tag: "<head>", reading: "ヘッド", meaning: "文書メタ情報領域", usage: "titleやmeta、CSS読み込みなどを置く", example: "<head><title>Page Title</title></head>" },
      { tag: "<h1>", reading: "エイチワン", meaning: "最上位見出し", usage: "ページやセクションの主要タイトルに使う", example: "<h1>プログラミング言語タグ辞典</h1>" },
      { tag: "<p>", reading: "ピー", meaning: "段落要素", usage: "本文テキストの段落を表す", example: "<p>これは説明文です。</p>" },
      { tag: "<br>", reading: "ビーアール", meaning: "改行要素", usage: "文中で強制改行したいときに使う", example: "1行目<br>2行目" },
      { tag: "<ul>", reading: "ユーエル", meaning: "順序なしリスト要素", usage: "箇条書きのリスト全体を囲む", example: "<ul><li>項目1</li><li>項目2</li></ul>" },
      { tag: "<li>", reading: "エルアイ", meaning: "リスト項目要素", usage: "ul/ol内で各項目を定義する", example: "<ul><li>項目1</li></ul>" },
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

/* Auto-generated completeness lists */
/* html=133 css=663 py=39 js=49 */

const COMPLETE_HTML_TAG_NAMES = [
  'a',
  'abbr',
  'acronym',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fencedframe',
  'fieldset',
  'figcaption',
  'figure',
  'font',
  'footer',
  'form',
  'frame',
  'frameset',
  'geolocation',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'meta',
  'meter',
  'nav',
  'nobr',
  'noembed',
  'noframes',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'plaintext',
  'pre',
  'progress',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'search',
  'section',
  'select',
  'selectedcontent',
  'slot',
  'small',
  'source',
  'span',
  'strike',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'tt',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'xmp',
];

const COMPLETE_CSS_PROPERTIES = [
  '--*',
  '-moz-appearance',
  '-moz-binding',
  '-moz-border-bottom-colors',
  '-moz-border-left-colors',
  '-moz-border-right-colors',
  '-moz-border-top-colors',
  '-moz-context-properties',
  '-moz-float-edge',
  '-moz-force-broken-image-icon',
  '-moz-orient',
  '-moz-outline-radius',
  '-moz-outline-radius-bottomleft',
  '-moz-outline-radius-bottomright',
  '-moz-outline-radius-topleft',
  '-moz-outline-radius-topright',
  '-moz-stack-sizing',
  '-moz-text-blink',
  '-moz-user-focus',
  '-moz-user-input',
  '-moz-user-modify',
  '-moz-window-dragging',
  '-moz-window-shadow',
  '-ms-accelerator',
  '-ms-block-progression',
  '-ms-content-zoom-chaining',
  '-ms-content-zoom-limit',
  '-ms-content-zoom-limit-max',
  '-ms-content-zoom-limit-min',
  '-ms-content-zoom-snap',
  '-ms-content-zoom-snap-points',
  '-ms-content-zoom-snap-type',
  '-ms-content-zooming',
  '-ms-filter',
  '-ms-flow-from',
  '-ms-flow-into',
  '-ms-grid-columns',
  '-ms-grid-rows',
  '-ms-high-contrast-adjust',
  '-ms-hyphenate-limit-chars',
  '-ms-hyphenate-limit-lines',
  '-ms-hyphenate-limit-zone',
  '-ms-ime-align',
  '-ms-overflow-style',
  '-ms-scroll-chaining',
  '-ms-scroll-limit',
  '-ms-scroll-limit-x-max',
  '-ms-scroll-limit-x-min',
  '-ms-scroll-limit-y-max',
  '-ms-scroll-limit-y-min',
  '-ms-scroll-rails',
  '-ms-scroll-snap-points-x',
  '-ms-scroll-snap-points-y',
  '-ms-scroll-snap-type',
  '-ms-scroll-snap-x',
  '-ms-scroll-snap-y',
  '-ms-scroll-translation',
  '-ms-scrollbar-3dlight-color',
  '-ms-scrollbar-arrow-color',
  '-ms-scrollbar-base-color',
  '-ms-scrollbar-darkshadow-color',
  '-ms-scrollbar-face-color',
  '-ms-scrollbar-highlight-color',
  '-ms-scrollbar-shadow-color',
  '-ms-scrollbar-track-color',
  '-ms-text-autospace',
  '-ms-touch-select',
  '-ms-user-select',
  '-ms-wrap-flow',
  '-ms-wrap-margin',
  '-ms-wrap-through',
  '-webkit-appearance',
  '-webkit-border-after',
  '-webkit-border-after-color',
  '-webkit-border-after-style',
  '-webkit-border-after-width',
  '-webkit-border-before',
  '-webkit-border-before-color',
  '-webkit-border-before-style',
  '-webkit-border-before-width',
  '-webkit-border-end',
  '-webkit-border-end-color',
  '-webkit-border-end-style',
  '-webkit-border-end-width',
  '-webkit-border-start',
  '-webkit-border-start-color',
  '-webkit-border-start-style',
  '-webkit-border-start-width',
  '-webkit-box-reflect',
  '-webkit-line-clamp',
  '-webkit-mask',
  '-webkit-mask-attachment',
  '-webkit-mask-clip',
  '-webkit-mask-composite',
  '-webkit-mask-image',
  '-webkit-mask-origin',
  '-webkit-mask-position',
  '-webkit-mask-position-x',
  '-webkit-mask-position-y',
  '-webkit-mask-repeat',
  '-webkit-mask-repeat-x',
  '-webkit-mask-repeat-y',
  '-webkit-mask-size',
  '-webkit-overflow-scrolling',
  '-webkit-tap-highlight-color',
  '-webkit-text-fill-color',
  '-webkit-text-stroke',
  '-webkit-text-stroke-color',
  '-webkit-text-stroke-width',
  '-webkit-touch-callout',
  '-webkit-user-modify',
  '-webkit-user-select',
  'accent-color',
  'align-content',
  'align-items',
  'align-self',
  'align-tracks',
  'alignment-baseline',
  'all',
  'anchor-name',
  'anchor-scope',
  'animation',
  'animation-composition',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-range',
  'animation-range-end',
  'animation-range-start',
  'animation-timeline',
  'animation-timing-function',
  'animation-trigger',
  'appearance',
  'aspect-ratio',
  'backdrop-filter',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-blend-mode',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-repeat',
  'background-size',
  'baseline-shift',
  'baseline-source',
  'block-size',
  'border',
  'border-block',
  'border-block-color',
  'border-block-end',
  'border-block-end-color',
  'border-block-end-style',
  'border-block-end-width',
  'border-block-start',
  'border-block-start-color',
  'border-block-start-style',
  'border-block-start-width',
  'border-block-style',
  'border-block-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-end-end-radius',
  'border-end-start-radius',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-inline',
  'border-inline-color',
  'border-inline-end',
  'border-inline-end-color',
  'border-inline-end-style',
  'border-inline-end-width',
  'border-inline-start',
  'border-inline-start-color',
  'border-inline-start-style',
  'border-inline-start-width',
  'border-inline-style',
  'border-inline-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-start-end-radius',
  'border-start-start-radius',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-align',
  'box-decoration-break',
  'box-direction',
  'box-flex',
  'box-flex-group',
  'box-lines',
  'box-ordinal-group',
  'box-orient',
  'box-pack',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'caret',
  'caret-animation',
  'caret-color',
  'caret-shape',
  'clear',
  'clip',
  'clip-path',
  'clip-rule',
  'color',
  'color-interpolation-filters',
  'color-scheme',
  'column-count',
  'column-fill',
  'column-gap',
  'column-height',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'column-wrap',
  'columns',
  'contain',
  'contain-intrinsic-block-size',
  'contain-intrinsic-height',
  'contain-intrinsic-inline-size',
  'contain-intrinsic-size',
  'contain-intrinsic-width',
  'container',
  'container-name',
  'container-type',
  'content',
  'content-visibility',
  'corner-block-end-shape',
  'corner-block-start-shape',
  'corner-bottom-left-shape',
  'corner-bottom-right-shape',
  'corner-bottom-shape',
  'corner-end-end-shape',
  'corner-end-start-shape',
  'corner-inline-end-shape',
  'corner-inline-start-shape',
  'corner-left-shape',
  'corner-right-shape',
  'corner-shape',
  'corner-start-end-shape',
  'corner-start-start-shape',
  'corner-top-left-shape',
  'corner-top-right-shape',
  'corner-top-shape',
  'counter-increment',
  'counter-reset',
  'counter-set',
  'cursor',
  'cx',
  'cy',
  'd',
  'direction',
  'display',
  'dominant-baseline',
  'dynamic-range-limit',
  'empty-cells',
  'field-sizing',
  'fill',
  'fill-opacity',
  'fill-rule',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'flood-color',
  'flood-opacity',
  'font',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-optical-sizing',
  'font-palette',
  'font-size',
  'font-size-adjust',
  'font-smooth',
  'font-stretch',
  'font-style',
  'font-synthesis',
  'font-synthesis-position',
  'font-synthesis-small-caps',
  'font-synthesis-style',
  'font-synthesis-weight',
  'font-variant',
  'font-variant-alternates',
  'font-variant-caps',
  'font-variant-east-asian',
  'font-variant-emoji',
  'font-variant-ligatures',
  'font-variant-numeric',
  'font-variant-position',
  'font-variation-settings',
  'font-weight',
  'font-width',
  'forced-color-adjust',
  'gap',
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'hanging-punctuation',
  'height',
  'hyphenate-character',
  'hyphenate-limit-chars',
  'hyphens',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'initial-letter',
  'initial-letter-align',
  'inline-size',
  'inset',
  'inset-block',
  'inset-block-end',
  'inset-block-start',
  'inset-inline',
  'inset-inline-end',
  'inset-inline-start',
  'interactivity',
  'interest-delay',
  'interest-delay-end',
  'interest-delay-start',
  'interpolate-size',
  'isolation',
  'justify-content',
  'justify-items',
  'justify-self',
  'justify-tracks',
  'left',
  'letter-spacing',
  'lighting-color',
  'line-break',
  'line-clamp',
  'line-height',
  'line-height-step',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-block',
  'margin-block-end',
  'margin-block-start',
  'margin-bottom',
  'margin-inline',
  'margin-inline-end',
  'margin-inline-start',
  'margin-left',
  'margin-right',
  'margin-top',
  'margin-trim',
  'marker',
  'marker-end',
  'marker-mid',
  'marker-start',
  'mask',
  'mask-border',
  'mask-border-mode',
  'mask-border-outset',
  'mask-border-repeat',
  'mask-border-slice',
  'mask-border-source',
  'mask-border-width',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'mask-type',
  'masonry-auto-flow',
  'math-depth',
  'math-shift',
  'math-style',
  'max-block-size',
  'max-height',
  'max-inline-size',
  'max-lines',
  'max-width',
  'min-block-size',
  'min-height',
  'min-inline-size',
  'min-width',
  'mix-blend-mode',
  'object-fit',
  'object-position',
  'object-view-box',
  'offset',
  'offset-anchor',
  'offset-distance',
  'offset-path',
  'offset-position',
  'offset-rotate',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-anchor',
  'overflow-block',
  'overflow-clip-box',
  'overflow-clip-margin',
  'overflow-inline',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'overlay',
  'overscroll-behavior',
  'overscroll-behavior-block',
  'overscroll-behavior-inline',
  'overscroll-behavior-x',
  'overscroll-behavior-y',
  'padding',
  'padding-block',
  'padding-block-end',
  'padding-block-start',
  'padding-bottom',
  'padding-inline',
  'padding-inline-end',
  'padding-inline-start',
  'padding-left',
  'padding-right',
  'padding-top',
  'page',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'paint-order',
  'perspective',
  'perspective-origin',
  'place-content',
  'place-items',
  'place-self',
  'pointer-events',
  'position',
  'position-anchor',
  'position-area',
  'position-try',
  'position-try-fallbacks',
  'position-try-order',
  'position-visibility',
  'print-color-adjust',
  'quotes',
  'r',
  'reading-flow',
  'reading-order',
  'resize',
  'right',
  'rotate',
  'row-gap',
  'ruby-align',
  'ruby-merge',
  'ruby-overhang',
  'ruby-position',
  'rx',
  'ry',
  'scale',
  'scroll-behavior',
  'scroll-initial-target',
  'scroll-margin',
  'scroll-margin-block',
  'scroll-margin-block-end',
  'scroll-margin-block-start',
  'scroll-margin-bottom',
  'scroll-margin-inline',
  'scroll-margin-inline-end',
  'scroll-margin-inline-start',
  'scroll-margin-left',
  'scroll-margin-right',
  'scroll-margin-top',
  'scroll-marker-group',
  'scroll-padding',
  'scroll-padding-block',
  'scroll-padding-block-end',
  'scroll-padding-block-start',
  'scroll-padding-bottom',
  'scroll-padding-inline',
  'scroll-padding-inline-end',
  'scroll-padding-inline-start',
  'scroll-padding-left',
  'scroll-padding-right',
  'scroll-padding-top',
  'scroll-snap-align',
  'scroll-snap-coordinate',
  'scroll-snap-destination',
  'scroll-snap-points-x',
  'scroll-snap-points-y',
  'scroll-snap-stop',
  'scroll-snap-type',
  'scroll-snap-type-x',
  'scroll-snap-type-y',
  'scroll-target-group',
  'scroll-timeline',
  'scroll-timeline-axis',
  'scroll-timeline-name',
  'scrollbar-color',
  'scrollbar-gutter',
  'scrollbar-width',
  'shape-image-threshold',
  'shape-margin',
  'shape-outside',
  'shape-rendering',
  'speak-as',
  'stop-color',
  'stop-opacity',
  'stroke',
  'stroke-color',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-anchor',
  'text-autospace',
  'text-box',
  'text-box-edge',
  'text-box-trim',
  'text-combine-upright',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-inset',
  'text-decoration-line',
  'text-decoration-skip',
  'text-decoration-skip-ink',
  'text-decoration-style',
  'text-decoration-thickness',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-position',
  'text-emphasis-style',
  'text-indent',
  'text-justify',
  'text-orientation',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-size-adjust',
  'text-spacing-trim',
  'text-transform',
  'text-underline-offset',
  'text-underline-position',
  'text-wrap',
  'text-wrap-mode',
  'text-wrap-style',
  'timeline-scope',
  'timeline-trigger',
  'timeline-trigger-activation-range',
  'timeline-trigger-activation-range-end',
  'timeline-trigger-activation-range-start',
  'timeline-trigger-active-range',
  'timeline-trigger-active-range-end',
  'timeline-trigger-active-range-start',
  'timeline-trigger-name',
  'timeline-trigger-source',
  'top',
  'touch-action',
  'transform',
  'transform-box',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-behavior',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'translate',
  'trigger-scope',
  'unicode-bidi',
  'user-select',
  'vector-effect',
  'vertical-align',
  'view-timeline',
  'view-timeline-axis',
  'view-timeline-inset',
  'view-timeline-name',
  'view-transition-class',
  'view-transition-name',
  'visibility',
  'white-space',
  'white-space-collapse',
  'widows',
  'width',
  'will-change',
  'word-break',
  'word-spacing',
  'word-wrap',
  'writing-mode',
  'x',
  'y',
  'z-index',
  'zoom',
];

const COMPLETE_PYTHON_KEYWORDS = [
  'False',
  'None',
  'True',
  'and',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'class',
  'continue',
  'def',
  'del',
  'elif',
  'else',
  'except',
  'finally',
  'for',
  'from',
  'global',
  'if',
  'import',
  'in',
  'is',
  'lambda',
  'nonlocal',
  'not',
  'or',
  'pass',
  'raise',
  'return',
  'try',
  'while',
  'with',
  'yield',
  '_',
  'case',
  'match',
  'type',
];

const COMPLETE_JAVASCRIPT_KEYWORDS = [
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'let',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
  'implements',
  'interface',
  'package',
  'private',
  'protected',
  'public',
  'static',
  'from',
  'as',
  'of',
];


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

const HTML_VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

const HTML_OBSOLETE_TAGS = new Set([
  "acronym",
  "applet",
  "basefont",
  "bgsound",
  "big",
  "blink",
  "center",
  "command",
  "content",
  "dir",
  "font",
  "frame",
  "frameset",
  "image",
  "isindex",
  "keygen",
  "listing",
  "marquee",
  "menuitem",
  "multicol",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "plaintext",
  "rb",
  "rtc",
  "shadow",
  "spacer",
  "strike",
  "tt",
  "xmp"
]);

const completeCatalog = {
  javascript: {
    entries: COMPLETE_JAVASCRIPT_KEYWORDS,
    toTag: (name) => name,
    kind: (name) => ["true", "false", "null"].includes(name) ? "JavaScriptリテラル" : "JavaScriptキーワード",
    reading: (name) => name,
    meaning: (name) => ["true", "false", "null"].includes(name) ? "JavaScriptのリテラル値" : "JavaScriptの予約語/構文キーワード",
    usage: () => "構文キーワードとして使う（識別子として使えないものがあります）",
    example: (name) => `${name} ...`
  },
  python: {
    entries: COMPLETE_PYTHON_KEYWORDS,
    toTag: (name) => name,
    kind: (name) => ["_", "case", "match", "type"].includes(name) ? "Pythonソフトキーワード" : "Pythonキーワード",
    reading: (name) => name,
    meaning: (name) => ["_", "case", "match", "type"].includes(name) ? "Pythonの文脈依存キーワード" : "Pythonの予約語",
    usage: () => "Python構文のキーワードとして使う",
    example: (name) => `${name} ...`
  },
  html: {
    entries: COMPLETE_HTML_TAG_NAMES,
    toTag: (name) => `<${name}>`,
    kind: (name) => HTML_OBSOLETE_TAGS.has(name) ? "HTMLタグ(非推奨)" : "HTMLタグ",
    reading: (name) => name,
    meaning: (name) => HTML_OBSOLETE_TAGS.has(name) ? "廃止/非推奨のHTML要素" : "HTML要素タグ",
    usage: (name) => HTML_OBSOLETE_TAGS.has(name) ? "新規実装では使用せず、現行要素へ置換する" : "マークアップ構造を定義する",
    example: (name) => HTML_VOID_TAGS.has(name) ? `<${name}>` : `<${name}>...</${name}>`
  },
  css: {
    entries: COMPLETE_CSS_PROPERTIES,
    toTag: (name) => name,
    kind: (name) => {
      if (name === "--*") return "CSSカスタムプロパティ";
      if (name.startsWith("-")) return "CSSプロパティ(ベンダー)";
      return "CSSプロパティ";
    },
    reading: (name) => name,
    meaning: (name) => {
      if (name === "--*") return "CSSカスタムプロパティ構文";
      if (name.startsWith("-")) return "ブラウザベンダー拡張プロパティ";
      return "CSSプロパティ";
    },
    usage: (name) => name === "--*" ? "--name: value; の形式で定義して var() で参照する" : "宣言ブロック内で値を指定する",
    example: (name) => name === "--*" ? "--main-color: #5fd7ff;" : `${name}: value;`
  }
};

function canonicalTagByLanguage(key, rawTag) {
  let value = normalize(rawTag);
  if (key === "html") {
    value = value.replace(/^<\s*/, "").replace(/\s*>$/, "");
    value = value.replace(/^\/+/, "").replace(/\/+$/, "");
    value = value.split(/\s+/)[0];
  }
  if (key === "javascript" || key === "python") {
    value = value.split("/")[0].trim();
  }
  return value;
}

function buildCompleteItems(key, existingItems) {
  const config = completeCatalog[key];
  if (!config) {
    return [];
  }

  const existing = new Set(existingItems.map((item) => canonicalTagByLanguage(key, item.tag)));
  const additions = [];

  config.entries.forEach((entryName) => {
    const displayTag = config.toTag(entryName);
    const canonical = canonicalTagByLanguage(key, displayTag);
    if (existing.has(canonical)) {
      return;
    }
    additions.push({
      kind: config.kind(entryName),
      tag: displayTag,
      reading: config.reading(entryName),
      meaning: config.meaning(entryName),
      usage: config.usage(entryName),
      example: config.example(entryName)
    });
  });

  return additions;
}

function getCoverageStatus(key, items) {
  const config = completeCatalog[key];
  if (!config) {
    return null;
  }

  const shown = new Set(items.map((item) => canonicalTagByLanguage(key, item.tag)));
  const missing = config.entries.filter((entryName) => {
    const displayTag = config.toTag(entryName);
    const canonical = canonicalTagByLanguage(key, displayTag);
    return !shown.has(canonical);
  });

  return {
    total: config.entries.length,
    missingCount: missing.length,
    isComplete: missing.length === 0
  };
}


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
  const allItems = getDisplayItems(key);
  const coverage = getCoverageStatus(key, allItems);
  languageTitle.textContent = `${entry.name} のタグ・関数・変数一覧（${allItems.length}項目）`;
  if (coverage) {
    const statusText = coverage.isComplete
      ? `公式リスト ${coverage.total} 件を表示（抜けなし）`
      : `公式リスト ${coverage.total} 件中 ${coverage.missingCount} 件が未表示`;
    languageDescription.textContent = `${entry.description} ${statusText}`;
  } else {
    languageDescription.textContent = entry.description;
  }
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
  const seedItems = [...extraItems, ...baseItems];
  const completeItems = buildCompleteItems(key, seedItems);
  return [...seedItems, ...completeItems];
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
