from flask import Flask, request, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'


@app.route('/')  # 代表设定一个视窗函数
def qiuzhi():
    return render_template('求职 找工作 招聘信息-BOSS直聘1.html')


@app.route('/fill')  # 填写表单内容
def fill():
    return render_template('表单页面.html')

@app.route('/CV')
def CV():
    return render_template('CV.html')

@app.route('/shandong')
def shandong():
    return render_template('shandong.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/lianjie')
def jiekou():
    return render_template('尝试采用接口.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0',port='80',debug=True)
