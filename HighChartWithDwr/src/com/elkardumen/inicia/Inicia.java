package com.elkardumen.inicia;



import javax.servlet.ServletContext;

import org.directwebremoting.ServerContext;
import org.directwebremoting.ServerContextFactory;
import org.directwebremoting.WebContextFactory;


import com.elkardumen.thread.HiloLectura;


public class Inicia 
{
	private ServerContext sctx;
    
    private transient boolean active = true;
    
    public Inicia()
    {
        ServletContext servletContext = WebContextFactory.get().getServletContext();
        sctx = ServerContextFactory.get(servletContext);
    }

  
	public synchronized void toggle() {
		// active = !active;
		System.out.println("!!!!!!!!" + active);
		if (active) {

			try {

				HiloLectura hiloInter = new HiloLectura(sctx);
				Thread theReader = new Thread(hiloInter);
				theReader.start();

				System.out.println("!!!!!!!!Generaste Hilo");
				active = false;

			} catch (Exception e) {
				e.printStackTrace();
			}

		}
	}

}
