# -*- coding:utf-8 -*-
"""""
Author: 大猪蹄子
Date: 2021年07月01日

"""""
from flask import Flask,request,render_template

app=Flask(__name__,static_folder=r'static')
app.config['SECRET_KEY'] = 'hard to guess string'

@app.route('/')
def index():
    return render_template('求职 找工作 招聘信息-BOSS直聘.html')


if __name__=='__main__':
    app.run(debug=True)