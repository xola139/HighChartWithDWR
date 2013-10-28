package com.elkardumen.thread;

import java.util.Collection;

import org.directwebremoting.ServerContext;
import org.directwebremoting.proxy.dwr.Util;

public class HiloLectura implements Runnable{
    
	private ServerContext sctx;
	  

    
    public HiloLectura (ServerContext sctx){
        this.sctx=sctx;
    }
    
    public  void run(){
        try{
        	System.out.println("Incia envio de info...");
    		int i=0;
    		Collection sessions=null;
    		Util pages=null;
    		String Json;
    		int contador=0;
    		while (true) {
    			    sessions= sctx.getScriptSessionsByPage("/HighChartWithDwr/index.html");
                    pages = new Util(sessions);
                    Json="{\"hora\":\""+System.currentTimeMillis() +"\",\"conteo\":\""+contador+"\"}";  
                	System.out.println(Json);
                    pages.addFunctionCall("putDatos",Json);
                	contador++;
                	Thread.sleep(10000);
    			}	 
        	
        }catch(Exception e){
            e.printStackTrace();
        }
    }
    
  
    
}
