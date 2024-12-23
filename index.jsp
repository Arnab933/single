<%-- 
    Document   : index
    Created on : 23 Dec 2024, 9:48:11 am
    Author     : arnab
--%>

<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
            <%!         // this is declaration tag
            %>
            
            <%
                String name = request.getParameter("name");
                String email = request.getParameter("email");
                
                if(name != null && email != null){
                    Connection conn = null;
                    PreparedStatement stmt = null;
                    try{
                        String url = "jdbc:mysql://localhost:3308/mydatabase";
                        String user = "root";
                        String password = "1234";
                        Class.forName("com.mysql.cj.jdbc.Driver");
                        
                         conn = (Connection)DriverManager.getConnection(url,user,password);
                         
                         stmt = conn.prepareStatement("insert into info(name,roll)values(?,?)");
                         stmt.setString(1, name);
                         stmt.setString(2, email);
                         
                         int n = stmt.executeUpdate();
                         
                         if(n > 0){ out.println("insert successfully");}
                         else{ out.println("insert unsuccessfully");}
                         conn.close();
                     }catch(Exception e){
                        out.println("<p> Error:"+e.getMessage()+"</p>");
                        }
                }
            %>
            
    </body>
</html>
