//2) Qual o padrão de projeto utilizado no trecho de código escrito em Java abaixo?
//public class A {
//  public static final A INSTANCE = new A();
//  
//  private A() {
//  
//  }
//  
//  public static A getInstance() {
//    return A.INSTANCE;
//  }
//}
//R: Singleton. Classe possui um constructor private, dando acesso à única instância através de função public.
//A classe só possui uma instância, a qual é inicializada somente quando a função getInstance é executada.