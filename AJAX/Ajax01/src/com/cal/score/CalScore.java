package com.cal.score;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

@WebServlet("/score.do")
public class CalScore extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		String name = request.getParameter("name");
		int kor = Integer.parseInt(request.getParameter("kor"));
		int eng = Integer.parseInt(request.getParameter("eng"));
		int math = Integer.parseInt(request.getParameter("math"));

		int sum = kor + eng + math;
		double avg = sum / 3.0;
		
		//{"key" : "value"}
		//json-simple-1.1.jar 에서 객체 가져오기 
		
		//JSON 객체 만들기
		JSONObject obj = new JSONObject();
		//값넣기
		obj.put("name", name);
		obj.put("sum", sum);
		obj.put("avg", avg);
		
		System.out.println(obj.toJSONString());
		
		//응답으로 내보낼 출력 스트림
		PrintWriter out = response.getWriter();
		out.println(obj.toJSONString());
	}

}
