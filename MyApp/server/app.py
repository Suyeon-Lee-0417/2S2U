from flask import Flask, request, jsonify
from flask_cors import CORS
import pyodbc
import traceback
import random

app = Flask(__name__)
CORS(app)

# 👉 이미 INSERT할 때 사용한 conn_str 그대로 사용
CONN_STR = (
    "DRIVER={ODBC Driver 18 for SQL Server};"
    "SERVER=vancouveract.database.windows.net;"
    "DATABASE=VancouverRecreationalActivities;"
    "UID=myadmin;"
    "PWD=SoohoJisooNayoung123!;"
    "Encrypt=yes;"
    "TrustServerCertificate=no;"
    "Connection Timeout=30;"
)

def get_conn():
    return pyodbc.connect(CONN_STR)


@app.route("/api/activities/search", methods=["POST"])
def search_activities():
    body = request.get_json(force=True) or {}
    print("🧪 Received request body:", body)

    # TODO: body 값에 따라 SQL 조건을 동적으로 붙일 수 있음
    sql = "SELECT * FROM words"
    print("🧾 SQL Query:", sql)

    try:
        with get_conn() as conn:
            cur = conn.cursor()
            cur.execute(sql)  # ← params가 없으니 단순 실행
            cols = [c[0] for c in cur.description]
            rows = [dict(zip(cols, r)) for r in cur.fetchall()]

            num = random.randint(0, 4)
            print(rows[num])
            print("✅ Query returned", len(rows), "rows")
            return rows[num]

    except Exception as e:
        print("❌ Exception:", str(e))
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=4000, debug=True)