/**
 * 同步加载js脚本
 * @param id   需要设置的<script>标签的id
 * @param url   js文件的相对路径或绝对路径
 * @return {Boolean}   返回是否加载成功，true代表成功，false代表失败
 */
function loadJS(id,url){
    var  xmlHttp = null;
    if(window.ActiveXObject)//IE
    {
        try {
            //IE6以及以后版本中可以使用
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            //IE5.5以及以后版本可以使用
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    else if(window.XMLHttpRequest)//Firefox，Opera 8.0+，Safari，Chrome
    {
        xmlHttp = new XMLHttpRequest();
    }
    //采用同步加载
    xmlHttp.open("GET",url,false);
    //发送同步请求，如果浏览器为Chrome或Opera，必须发布后才能运行，不然会报错
    xmlHttp.send(null);
    //4代表数据发送完毕
    if ( xmlHttp.readyState == 4 )
    {
        //0为访问的本地，200到300代表访问服务器成功，304代表没做修改访问的是缓存
        if((xmlHttp.status >= 200 && xmlHttp.status <300) || xmlHttp.status == 0 || xmlHttp.status == 304)
        {
            var myHead = document.getElementsByTagName("HEAD").item(0);
            var myScript = document.createElement( "script" );
            myScript.language = "javascript";
            myScript.type = "text/javascript";
            myScript.id = id;
            try{
                //IE8以及以下不支持这种方式，需要通过text属性来设置
                myScript.appendChild(document.createTextNode(xmlHttp.responseText));
            }
            catch (ex){
                myScript.text = xmlHttp.responseText;
            }
            myHead.appendChild( myScript );
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}