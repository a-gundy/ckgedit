function parse_wikitext(u){if(ckgedit_dwedit_reject){var F=GetE("ebut_cancel");F.click();return true}var m=setComplexTables();function k(P,Q,K){var N=new Array();for(var M=Q;M<P.length;M++){for(var L=0;L<P[M].length;L++){if(P[M][L].rowspan>0){var O=P[M][L].text;N.push({row:M,column:L,spans:P[M][L].rowspan,text:O});if(!K){break}}}}return N}function y(O,K,M,N,i){var L=N[O][K].colspan?N[O][K].colspan:0;N[O][K].rowspan=0;for(D=0;D<M-1;D++){N[++O].splice(K,0,{type:"td",rowspan:0,colspan:L,prev_colspan:L,text:" ::: "})}}function H(P){var M=k(P,0,true);var K=M.length;if(!K){return false}var Q=M[0].row;var L=M[0].column;y(Q,L,M[0].spans,P);K--;for(var O=0;O<K;O++){Q++;var N=k(P,Q,false);if(N.length){y(N[0].row,N[0].column,N[0].spans,P)}}return true}function e(N){if(!m){return}for(var L=0;L<N.length;L++){if(!H(N)){break}}w+="\n";for(var L=0;L<N.length;L++){w+="\n";for(var K=0;K<N[L].length;K++){var M=N[L][K].type=="td"?"|":"^";w+=M;var P=N[L][K].align?N[L][K].align:false;if(P=="center"||P=="right"){w+="  "}w+=N[L][K].text;if(P=="center"||P=="left"){w+="  "}if(N[L][K].colspan){for(var O=0;O<N[L][K].colspan-1;O++){w+=M}}}w+="|"}}window.dwfckTextChanged=false;if(u!="bakup"){draft_delete()}var C="\nL_BR_K  \n";var I={b:"**",i:"//",em:"//",u:"__",br:C,strike:"<del>",del:"<del>",s:"<del>",p:"\n\n",a:"[[",img:"{{",strong:"**",h1:"\n====== ",h2:"\n===== ",h3:"\n==== ",h4:"\n=== ",h5:"\n== ",td:"|",th:"^",tr:" ",table:"\n\n",ol:"  - ",ul:"  * ",li:"",code:"''",pre:"\n<",hr:"\n\n----\n\n",sub:"<sub>",font:"\n",sup:"<sup>",div:"\n\n",span:"\n",dl:"\n",dd:"\n",dt:"\n"};var c={del:"</del>",s:"</del>",strike:"</del>",p:" ",br:" ",a:"]]",img:"}}",h1:" ======\n",h2:" =====\n",h3:" ====\n",h4:" ===\n",h5:" ==\n",td:" ",th:" ",tr:"|\n",ol:" ",ul:" ",li:"\n",pre:"\n</",sub:"</sub>",sup:"</sup> ",div:"\n\n",p:"\n\n",font:"\n\n</font> "};I.temp_u="CKGE_TMP_u";I.temp_strong="CKGE_TMP_strong";I.temp_em="CKGE_TMP_em";I.temp_i="CKGE_TMP_i";I.temp_b="CKGE_TMP_b";I.temp_del="CKGE_TMP_del";I.temp_strike="CKGE_TMP_strike";I.temp_code="CKGE_TMP_code";I.blank="";I.fn_start="((";I.fn_end="))";I.row_span=":::";I.p_insert="_PARA__TABLE_INS_";I.format_space="_FORMAT_SPACE_";I.pre_td="<";var J={strong:true,b:true,i:true,em:true,u:true,del:true,strike:true,code:true};var w="";var E=false;var x=false;var B=false;var p=false;var s=false;var j=false;var t=false;var o=false;var d=false;var r=false;var h;var v=new Array();var g=new Array();var n=false;var l=I.p_insert;var q="(br|co|coMULTI|es|kw|me|nu|re|st|sy)[0-9]";String.prototype.splice=function(i,L,K){return(this.slice(0,i)+K+this.slice(i+Math.abs(L)))};String.frasl=new RegExp("⁄|&frasl;|&#8260;|&#x2044;","g");q=new RegExp(q);HTMLParser(CKEDITOR.instances.wiki__text.getData(),{attribute:"",link_title:"",link_class:"",image_link_type:"",td_align:"",in_td:false,td_colspan:0,td_rowspan:0,rowspan_col:0,last_column:-1,row:0,col:0,td_no:0,tr_no:0,current_row:false,in_table:false,in_multi_plugin:false,is_rowspan:false,list_level:0,prev_list_level:-1,list_started:false,xcl_markup:false,in_link:false,link_formats:new Array(),last_tag:"",code_type:false,in_endnotes:false,is_smiley:false,geshi:false,downloadable_code:false,export_code:false,code_snippet:false,downloadable_file:"",external_mime:false,in_header:false,curid:false,format_in_list:false,prev_li:new Array(),link_only:false,in_font:false,interwiki:false,bottom_url:false,font_family:"arial",font_size:"9pt",font_weight:"normal",font_color:"#000000",font_bgcolor:"#ffffff",font_style:"inherit",is_mediafile:false,backup:function(M,L){var O=w.lastIndexOf(M);var K=w.indexOf(L,O);if(O==-1||K==-1){return}if(M.length+K==K){var N=w.substring(0,O);var i=w.substring(K);w=N+i;return true}return false},is_iwiki:function(L,N){var M=L.match(/iw_(\w+)/);var i=N.split(/\//);var K=i[i.length-1];K=K.replace(String.frasl,"/");this.attr=M[1]+">"+K;this.interwiki=true},start:function(am,T,ad){if(I[am]){if(J[am]&&this.in_link){this.link_formats.push(am);return}if(J[am]&&this.in_font){w+=" ";var ai="temp_"+am;w+=I[ai];w+=" ";return}else{if(am=="acronym"){return}}if(am=="ol"||am=="ul"){this.prev_list_level=this.list_level;this.list_level++;if(this.list_level==1){this.list_started=false}if(this.list_started){this.prev_li.push(I.li)}I.li=I[am];return}else{if(!this.list_level){I.li="";this.prev_li=new Array()}}this.is_mediafile=false;if(am=="img"){var al="?";var K;var M;var an=false;var ab="";var W="";var ac=false;this.is_smiley=false;this.in_link=false}if(am=="a"){var aa=true;var au="";this.xcl_markup=false;this.in_link=true;this.link_pos=w.length;this.link_formats=new Array();this.footnote=false;var U=false;this.id="";this.external_mime=false;var at=false;this.export_code=false;this.code_snippet=false;this.downloadable_file="";var Y=false;this.link_only=false;save_url="";this.interwiki=false;this.bottom_url=false;this.link_title=false;var ag="";var X=""}if(am=="p"){this.in_link=false;if(this.in_table){am="p_insert";p=true}}if(am=="table"){this.td_no=0;this.tr_no=0;this.in_table=true;this.is_rowspan=false;this.row=-1;this.rows=new Array();h=this.rows;this.table_start=w.length}else{if(am=="tr"){this.tr_no++;this.td_no=0;this.col=-1;this.row++;this.rows[this.row]=new Array();this.current_row=this.rows[this.row]}else{if(am=="td"||am=="th"){this.td_no++;this.col++;this.current_row[this.col]={type:am,rowspan:0,colspan:0,text:""};this.cell_start=w.length;this.current_cell=this.current_row[this.col];if(this.td_rowspan&&this.rowspan_col==this.td_no&&this.td_no!=this.last_column){this.is_rowspan=true;this.td_rowspan--}else{this.is_rowspan=false}}}}var L;this.attr=false;this.format_tag=false;if(J[am]){this.format_tag=true}var V=false;for(var aq=0;aq<T.length;aq++){if(am=="td"||am=="th"){if(T[aq].name=="colspan"){this.current_row[this.col].colspan=T[aq].value}if(T[aq].name=="class"){if((L=T[aq].value.match(/(left|center|right)/))){this.current_row[this.col].align=L[1]}}if(T[aq].name=="rowspan"){this.current_row[this.col].rowspan=T[aq].value}}if(T[aq].escaped=="u"&&am=="em"){am="u";this.attr="u";break}if(am=="div"){if(T[aq].name=="class"&&T[aq].value=="footnotes"){am="blank";this.in_endnotes=true}break}if(am=="dl"&&T[aq].name=="class"&&T[aq].value=="file"){this.downloadable_code=true;B=true;return}if(am=="span"&&T[aq].name=="class"){if(T[aq].value=="np_break"){return}}if(am=="span"&&T[aq].name=="class"){if(T[aq].value=="curid"){this.curid=true;return}if(T[aq].value=="multi_p_open"){this.in_multi_plugin=true;t=true;return}if(T[aq].value=="multi_p_close"){this.in_multi_plugin=false;return}if(T[aq].value.match(q)){am="blank";this.geshi=true;break}}if(am=="span"){if(T[aq].name=="style"){if(!this.in_font){w+="__STYLE__"}this.in_font=true;L=T[aq].value.match(/font-family:\s*([\w\-\s,]+);?/);if(L){this.font_family=L[1]}L=T[aq].value.match(/font-size:\s*(.*)/);if(L){L[1]=L[1].replace(/;/,"");this.font_size=L[1]}L=T[aq].value.match(/font-weight:\s*(\w+);?/);if(L){this.font_weight=L[1]}L=T[aq].value.match(/.*?color:\s*(.*)/);if(L){L[1]=L[1].replace(/;/,"");if(L[0].match(/background/)){this.font_bgcolor=L[1]}else{this.font_color=L[1]}}}}if(am=="td"||am=="th"){if(am=="td"){w=w.replace(/\^$/,"|")}this.in_td=true;if(T[aq].name=="align"){this.td_align=T[aq].escaped}else{if(T[aq].name=="class"){L=T[aq].value.match(/\s*(\w+)align/);if(L){this.td_align=L[1]}}else{if(T[aq].name=="colspan"){s=true;this.td_colspan=T[aq].escaped}else{if(T[aq].name=="rowspan"){this.td_rowspan=T[aq].escaped-1;this.rowspan_col=this.td_no}}}}p=true}if(am=="a"){if(T[aq].name=="title"){this.link_title=T[aq].escaped;if(X){ag=T[aq].escaped}else{this.link_title=this.link_title.replace(/\s+.*$/,"")}}else{if(T[aq].name=="class"){if(T[aq].value.match(/fn_top/)){this.footnote=true}else{if(T[aq].value.match(/fn_bot/)){U=true}else{if(T[aq].value.match(/mf_(png|gif|jpg|jpeg)/i)){this.link_only=true}}}this.link_class=T[aq].escaped;at=this.link_class.match(/mediafile/)}else{if(T[aq].name=="id"){this.id=T[aq].value}else{if(T[aq].name=="type"){au=T[aq].value}else{if(T[aq].name=="href"&&!this.code_type){var S=T[aq].escaped.match(/https*:\/\//)?true:false;if(S){save_url=T[aq].escaped}if(T[aq].escaped.match(/\/lib\/exe\/detail.php/)){this.image_link_type="detail"}else{if(T[aq].escaped.match(/exe\/fetch.php/)){this.image_link_type="direct"}}if(this.link_class&&this.link_class.match(/media/)&&!this.link_title){var af=T[aq].escaped.match(/media=(.*)/);if(af){this.link_title=af[1]}}var ak=T[aq].escaped.match(/fetch\.php.*?media=.*?\.(png|gif|jpg|jpeg)$/i);if(ak){ak=ak[1]}if(T[aq].escaped.match(/^https*:/)){this.attr=T[aq].escaped;aa=false}if(T[aq].escaped.match(/^ftp:/)){this.attr=T[aq].escaped;aa=false}else{if(T[aq].escaped.match(/do=export_code/)){this.export_code=true}else{if(T[aq].escaped.match(/^nntp:/)){this.attr=T[aq].escaped;aa=false}else{if(T[aq].escaped.match(/^mailto:/)){this.attr=T[aq].escaped.replace(/mailto:/,"");aa=false}else{if(T[aq].escaped.match(/^file:/)){var N=T[aq].value.replace(/file:[\/]+/,"");N=N.replace(/[\/]/g,"\\");N="\\\\"+N;this.attr=N;aa=false}else{if(S&&!ak&&(L=T[aq].escaped.match(/fetch\.php(.*)/))){if(L[1].match(/media=/)){R=L[1].split(/=/);this.attr=R[1]}else{L[1]=L[1].replace(/^\//,"");this.attr=L[1]}aa=false;this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);if(!this.attr.match(/^:/)){this.attr=":"+this.attr}this.external_mime=true}else{aa=false;L=T[aq].escaped.match(/doku.php\?id=(.*)/);if(!L){L=T[aq].escaped.match(/doku.php\/(.*)/)}if(L){if(!L[1].match(/\?/)&&L[1].match(/&amp;/)){Y=true;L[1]=L[1].replace(/&amp;/,"?")}}if(L&&L[1]){if(!L[1].match(/^:/)){this.attr=":"+L[1]}else{this.attr=L[1]}if(this.attr.match(/\.\w+$/)){if(au&&au=="other_mime"){this.external_mime=true}else{for(var ao=aq+1;ao<T.length;ao++){if(T[ao].value.match(/other_mime/)){this.external_mime=true}break}}}}else{L=T[aq].value.match(/\\\\/);if(L){this.attr=T[aq].escaped;aa=false}}}}}}}}if(this.link_class=="media"){if(T[aq].value.match(/http:/)){aa=false}}if(!this.attr&&this.link_title){if(L=this.link_class.match(/media(.*)/)){this.link_title=decodeURIComponent(safe_convert(this.link_title));this.attr=this.link_title;var ap=L[1].split(/_/);if(ap&&ap[1]){ak=ap[1]}else{if(ap){ak=ap[0]}else{ak="mf"}}if(!this.attr.match(/^:/)&&!this.attr.match(/^https?\:/)){this.attr=":"+this.attr.replace(/^\s+/,"")}this.external_mime=true;aa=false}}if(this.attr.match&&this.attr.match(/%[a-fA-F0-9]{2}/)&&(L=this.attr.match(/userfiles\/file\/(.*)/))){L[1]=L[1].replace(/\//g,":");if(!L[1].match(/^:/)){L[1]=":"+L[1]}this.attr=decodeURIComponent?decodeURIComponent(L[1]):unescape(L[1]);this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);this.external_mime=true}if(this.link_title&&this.link_title.match(/Snippet/)){this.code_snippet=true}if(T[aq].value.match(/^#/)&&this.link_class.match(/wikilink/)){this.attr=T[aq].value;this.link_title=false}if(this.link_class.match(/wikilink/)&&this.link_title){this.external_mime=false;if(!this.attr){this.attr=this.link_title}if(!this.attr.match(/^:/)){this.attr=":"+this.attr}if(this.attr.match(/\?.*?=/)){var R=this.attr.split(/\?/);R[0]=R[0].replace(/\//g,":");this.attr=R[0]+"?"+R[1]}else{this.attr=this.attr.replace(/\//g,":")}if(!Y&&T[aq].name=="href"){if(!this.attr.match(/\?.*?=/)&&!T[aq].value.match(/doku.php/)){var ar=T[aq].value.match(/(\?.*)$/);if(ar&&ar[1]){this.attr+=ar[1]}}}}else{if(this.link_class.match(/mediafile/)&&this.link_title&&!this.attr){this.attr=this.link_title;this.external_mime=true;if(!this.attr.match(/^:/)){this.attr=":"+this.attr}}else{if(this.link_class.match(/interwiki/)){X=this.link_class}}}if(this.link_class=="urlextern"){this.attr=save_url;this.external_mime=false}if(this.in_endnotes){if(this.link_title){this.bottom_url=this.link_title}else{if(this.attr){this.bottom_url=this.attr}}}this.link_title="";this.link_class=""}}}}}}if(X&&ag){this.is_iwiki(X,ag);X="";ag=""}if(am=="sup"){if(T[aq].name=="class"){L=T[aq].value.split(/\s+/);if(L[0]=="dwfcknote"){this.attr=L[0];am="blank";if(oDokuWiki_FCKEditorInstance.oinsertHtmlCodeObj.notes[L[1]]){V="(("+oDokuWiki_FCKEditorInstance.oinsertHtmlCodeObj.notes[L[1]]+"))"}break}}}if(am=="pre"){if(T[aq].name=="class"){var R=T[aq].escaped.split(/\s+/);if(R.length>1){this.attr=T[aq].value;this.code_type=R[0]}else{this.attr=T[aq].escaped;this.code_type=this.attr}if(this.downloadable_code){this.attr=this.attr.replace(/\s*code\s*/,"");this.code_type="file"}x=true;if(this.in_table){am="pre_td"}break}}else{if(am=="img"){if(T[aq].name=="alt"){W=T[aq].value}if(T[aq].name=="type"){this.image_link_type=T[aq].value}if(T[aq].name=="src"){var ae="";if(L=T[aq].escaped.match(/fetch\.php.*?(media=.*)/)){var R=L[1].split("=");ae=R[1];if(L=T[aq].escaped.match(/(media.*)/)){var R=L[1].split("=");var P=R[1];ae=decodeURIComponent?decodeURIComponent(P):unescape(P)}if(!ae.match(/https?:/)&&!ae.match(/^:/)){ae=":"+ae}}else{if(T[aq].escaped.match(/https?:\/\//)){ae=T[aq].escaped;ae=ae.replace(/\?.*?$/,"")}else{if(L=T[aq].escaped.match(/\/_media\/(.*)/)){var R=L[1].split(/\?/);ae=R[0];ae=ae.replace(/\//g,":");if(!ae.match(/^:/)){ae=":"+ae}}else{if(L=T[aq].escaped.match(/\/lib\/exe\/fetch.php\/(.*)/)){var R=L[1].split(/\?/);ae=R[0];if(!ae.match(/^:/)){ae=":"+ae}}else{L=T[aq].escaped.match(/^.*?\/userfiles\/image\/(.*)/);if(!L){var O=doku_base+"data/media/";O=O.replace(/([\/\\])/g,"\\$1");O="^.*?"+O+"(.*)";O=new RegExp(O);L=T[aq].escaped.match(O)}if(L&&L[1]){ae=L[1].replace(/\//g,":");ae=":"+ae}else{ae=decodeURIComponent?decodeURIComponent(T[aq].escaped):unescape(T[aq].escaped);if(ae.search(/data:image.*?;base64/)>-1){ac=true}}if(ae&&ae.match(/lib\/images\/smileys/)){this.is_smiley=true}}}}}this.attr=ae;if(this.attr&&this.attr.match&&this.attr.match(/%[a-fA-F0-9]{2}/)){this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr);this.attr=decodeURIComponent?decodeURIComponent(this.attr):unescape(this.attr)}}else{if(T[aq].name=="width"&&!an){K=T[aq].value}else{if(T[aq].name=="height"&&!an){M=T[aq].value}else{if(T[aq].name=="style"){var Q=T[aq].escaped.match(/width:\s*(\d+)/);if(Q){K=Q[1];var Q=T[aq].escaped.match(/height:\s*(\d+)/);if(Q){M=Q[1]}}}else{if(T[aq].name=="align"||T[aq].name=="class"){if(T[aq].escaped.match(/(center|middle)/)){ab="center"}else{if(T[aq].escaped.match(/right/)){ab="right"}else{if(T[aq].escaped.match(/left/)){ab="left"}else{ab=""}}}}}}}}}}}if(this.is_smiley){if(W){w+=W+" ";W=""}this.is_smiley=false;return}if(this.link_only){am="img"}if(am=="br"){if(this.in_multi_plugin){w+="\n";return}if(!this.code_type){E=true}else{if(this.code_type){w+="\n";return}}if(this.in_table){w+=l;return}if(this.list_started){w+="_LIST_EOFL_"}else{w+="\\\\  ";return}}else{if(am.match(/^h(\d+|r)/)){var Z=w.length;if(am.match(/h(\d+)/)){this.in_header=true}if(Z){if(w.charCodeAt(Z-1)==32){w=w.replace(/\x20+$/,"")}}}else{if(this.last_col_pipes){if(J[am]){w+=I[am]}am="blank"}else{if(V){w+=V;return}}}}if(am=="b"||am=="i"&&this.list_level){if(w.match(/(\/\/|\*)(\x20)+/)){w=w.replace(/(\/\/|\*)(\x20+)\-/,"$1\n$2-")}}if(am=="li"&&this.list_level){if(this.list_level==1&!this.list_started){w+="\n";this.list_started=true}w=w.replace(/[\x20]+$/,"");for(var aj=0;aj<this.list_level;aj++){if(w.match(/_FORMAT_SPACE_\s*$/)){w=w.replace(/_FORMAT_SPACE_\s*$/,"\n")}if(this.list_level>1){w+="  "}}if(this.prev_list_level>0&&I.li==I.ol){this.prev_list_level=-1}}if(am=="a"&&aa){this.xcl_markup=true;return}else{if(am=="a"&&(this.export_code||this.code_snippet)){return}else{if(am=="a"&&this.footnote){am="fn_start"}else{if(am=="a"&&U){v.push(this.id)}else{if(am=="a"&&this.external_mime){if(this.in_endnotes){this.link_class="media";return}if(at&&at=="mediafile"){w+=I.img;w+=this.attr+"|";this.is_mediafile=true}return}else{if(this.in_font){return}}}}}}if(this.in_endnotes&&am=="a"){return}if(this.code_type&&am=="span"){am="blank"}w+=I[am];if(am=="td"||am=="th"||(this.last_col_pipes&&this.td_align=="center")){if(this.is_rowspan){w+=I.row_span+" | ";this.is_rowspan=false}if(this.td_align=="center"||this.td_align=="right"){w+="  "}}else{if(am=="a"&&this.attr){this.attr=this.attr.replace(/%7c/,"%257c");w+=this.attr+"|"}else{if(am=="img"){var ah=this.image_link_type;this.image_link_type="";if(this.link_only){ah="link_only"}if(!ah||ac){ah="nolink"}else{if(ah=="detail"){ah=""}}if(ah=="link_only"){al="?linkonly"}else{if(ah){al+=ah+"&"}}if(K&&M){al+=K+"x"+M}else{if(K){al+=K}else{if(!ah){al=""}}}if(ab&&ab!="left"){w+="  "}this.attr+=al;if(ab=="center"||ab=="left"){this.attr+="  "}w+=this.attr+"}}";this.attr="src"}else{if(am=="pre"||am=="pre_td"){if(this.downloadable_file){this.attr+=" "+this.downloadable_file}if(!this.attr){this.attr="code"}w+=this.attr+">";this.downloadable_file="";this.downloadable_code=false}}}}}},end:function(Z){if(J[Z]&&this.in_font){w+=" ";var Y="temp_"+Z;w+=I[Y];w+=" ";return}if(this.in_endnotes&&Z=="a"){return}if(this.link_only){this.link_only=false;return}if(!I[Z]){return}if(Z=="sup"&&this.attr=="dwfcknote"){return}if(this.is_smiley){this.is_smiley=false;if(Z!="li"){return}}if(Z=="span"&&this.in_font){Z="font";var U="<font "+this.font_size+"/"+this.font_family+";;"+this.font_color+";;"+this.font_bgcolor+">\n\n";var Q=w.lastIndexOf("__STYLE__");w=w.splice(Q,9,U);this.font_family="arial";this.font_size="9pt";this.font_weight="normal";this.font_color="#000000";this.font_bgcolor="#ffffff";this.in_font=false}if(Z=="span"&&this.curid){this.curid=false;return}if(Z=="dl"&&this.downloadable_code){this.downloadable_code=false;return}if(m&&(Z=="td"||Z=="th")){this.current_cell.text=w.substring(this.cell_start);this.current_cell.text=this.current_cell.text.replace(/:::/gm,"");this.current_cell.text=this.current_cell.text.replace(/^[\s\|\^]+/,"")}if(Z=="a"&&(this.export_code||this.code_snippet)){this.export_code=false;this.code_snippet=false;return}if(this.code_type&&Z=="span"){Z="blank"}var W=Z;if(this.footnote){Z="fn_end";this.footnote=false}else{if(Z=="a"&&this.xcl_markup){this.xcl_markup=false;return}else{if(Z=="table"){this.in_table=false;if(m){w=w.substring(0,this.table_start);e(this.rows)}}}}if(Z=="p"&&this.in_table){Z="p_insert";p=true}if(this.geshi){this.geshi=false;return}if(Z=="code"&&!this.list_started){if(w.match(/''\s*$/m)){w=w.replace(/''\s*$/,"\n");return}}else{if(Z=="a"&&this.attr=="src"){if(this.backup("[[","{")){return}}}if(Z=="ol"||Z=="ul"){this.list_level--;if(!this.list_level){this.format_in_list=false}if(this.prev_li.length){I.li=this.prev_li.pop()}Z="\n\n"}else{if(Z=="a"&&this.external_mime){this.external_mime=false;if(this.is_mediafile){Z="}} "}else{return}}else{if(Z=="pre"){Z=c[Z];if(this.code_type){Z+=this.code_type+">"}else{var L=w.lastIndexOf("code");var N=w.lastIndexOf("file");if(N>L){this.code_type="file"}else{this.code_type="code"}Z+=this.code_type+">"}this.code_type=false}else{if(c[Z]){Z=c[Z]}else{if(this.attr=="u"&&Z=="em"){Z="u"}else{if(Z=="acronym"){}else{Z=I[Z]}}}}}}if(W=="tr"){if(this.last_col_pipes){Z="\n";this.last_col_pipes=""}if(this.td_rowspan&&this.rowspan_col==this.td_no+1){this.is_rowspan=false;this.last_column=this.td_no;this.td_rowspan--;Z="|"+I.row_span+"|\n"}}else{if(W=="td"||W=="th"){this.last_col_pipes="";this.in_td=false}else{if(W.match(/h\d+/)){this.in_header=false}}}if(I.li){if(w.match(/\n$/)&&!this.list_level){Z=""}}if(this.in_link&&J[W]&&this.link_formats.length){return}w+=Z;if(J[W]){if(this.list_level){this.format_in_list=true;d=true}w+=I.format_space;j=I.format_space}this.last_tag=W;if(this.td_colspan&&!m){if(this.td_align=="center"){w+=" "}var M="|";if(W=="th"){M="^"}var P=M;for(var R=1;R<this.td_colspan;R++){P+=M}this.last_col_pipes=P;w+=P;this.td_colspan=false}else{if(this.td_align=="center"){w+=" ";this.td_align=""}}if(W=="a"&&this.link_formats.length){var X=w.substring(this.link_pos);var S=w.substring(0,this.link_pos);var K="";var V="";for(var R=0;R<this.link_formats.length;R++){var O=I[this.link_formats[R]];var T=c[this.link_formats[R]]?c[this.link_formats[R]]:O;K+=I[this.link_formats[R]];V=T+V}S+=K;X+=V;w=S+X;this.link_formats=new Array();this.in_link=false}else{if(W=="a"){this.link_formats=new Array();this.in_link=false}}},chars:function(N){N=N.replace(/\t/g,"    ");if(this.interwiki){N=N.replace(String.frasl,"/")}if(this.interwiki&&w.match(/>\w+\s*\|$/)){this.interwiki=false;if(this.attr){w+=N}else{w=w.replace(/>\w+\s*\|$/,">"+N)}return}if(this.in_multi_plugin){N=N.replace("&lt; ","&lt;")}N=N.replace(/&#39;/g,"'");N=N.replace(/^(&gt;)+/,function(P,O){return(P.replace(/(&gt;)/g,"__QUOTE__"))});w=w.replace(/([\/\*_])_FORMAT_SPACE_([\/\*_]{2})_FORMAT_SPACE_$/,"$1$2");if(N.match(/^&\w+;/)){w=w.replace(/_FORMAT_SPACE_\s*$/,"")}if(this.link_only){if(N){replacement="|"+N+"}} ";w=w.replace(/\}\}\s*$/,replacement)}return}if(!this.code_type){if(!this.last_col_pipes){N=N.replace(/\x20{6,}/,"   ");N=N.replace(/^(&nbsp;)+\s*$/,"_FCKG_BLANK_TD_");N=N.replace(/(&nbsp;)+/," ")}if(this.format_tag){if(!this.list_started||this.in_table){N=N.replace(/^\s+/,"@@_SP_@@")}}else{if(this.last_tag=="a"){N=N.replace(/^\s{2,}/," ")}else{N=N.replace(/^\s+/,"")}}if(N.match(/nowiki&gt;/)){o=true}if(this.format_in_list){N=N.replace(/^[\n\s]+$/g,"");if(N.match(/\n{2,}\s{1,}/)){N=N.replace(/\n{2,}/,"\n")}}if(this.in_td&&!N){N="_FCKG_BLANK_TD_";this.in_td=false}}else{N=N.replace(/&lt;\s/g,"<");N=N.replace(/\s&gt;/g,">");var i=N.match(/^\s*geshi:\s+(.*)$/m);if(i){w=w.replace(/<(code|file)>\s*$/,"<$1 "+i[1]+">");N=N.replace(i[0],"")}}if(this.attr&&this.attr=="dwfcknote"){if(N.match(/fckgL\d+/)){return}if(N.match(/^[\-,:;!_]/)){w+=N}else{w+=" "+N}return}if(this.downloadable_code&&(this.export_code||this.code_snippet)){this.downloadable_file=N;return}if(this.last_tag=="a"&&N.match(/^[\.,;\:\!]/)){w=w.replace(/\s$/,"")}if(this.in_header){N=N.replace(/---/g,"&mdash;");N=N.replace(/--/g,"&ndash;")}if(this.list_started){w=w.replace(/_LIST_EOFL_\s*L_BR_K\s*$/,"_LIST_EOFL_")}if(!this.code_type){if(!w.match(/\[\[\\\\.*?\|$/)&&!N.match(/\w:(\\(\w?))+/)){if(!N.match(/\\\\[\w\.\-\_]+\\[\w\.\-\_]+/)){N=N.replace(/([\\])/g,"%%$1%%")}N=N.replace(/([\*])/g,"_CKG_ASTERISK_")}}if(this.in_endnotes&&v.length){if(N.match(/\w/)&&!N.match(/^\s*\d\)\s*$/)){N=N.replace(/\)\s*$/,"_FN_PAREN_C_");var K=v.length-1;if(this.bottom_url){if(this.link_class&&this.link_class=="media"){N="{{"+this.bottom_url+"|"+N+"}}"}else{N="[["+this.bottom_url+"|"+N+"]]"}}if(g[v[K]]){g[v[K]]+=" "+N}else{g[v[K]]=N}}this.bottom_url=false;return}if(N&&N.length){w+=N}w=w.replace(/(&\w+;)\s*([\*\/_]{2})_FORMAT_SPACE_(\w+)/,"$1$2$3");if(this.list_level&&this.list_level>1){w=w.replace(/(\[\[.*?\]\])([ ]+[\*\-].*)$/," $1\n$2")}try{var M=new RegExp("([*/_]{2,})_FORMAT_SPACE_([*/_]{2,})("+RegExp.escape(N)+")$");if(w.match(M)){w=w.replace(M,"$1$2$3")}}catch(L){}if(!n){if(N.match(/&lt;/)){n=true}}},comment:function(i){},dbg:function(K,i){if(K.replace){K=K.replace(/^\s+/g,"");K=K.replace(/^\n$/g,"");if(!K){return}}if(i){i="<b>"+i+"</b>\n"}HTMLParser_DEBUG+=i+K+"\n__________\n"}});w=w.replace(/(\[\[\\\\)(.*?)\]\]/gm,function(i,L,K){K=K.replace(/\\/g,"_SMB_");return L+K+"]]"});w=w.replace(/%*\\%*([^\w]{1})%*\\%*/g,"$1");w=w.replace(/_SMB_/g,"\\");w=w.replace(/CKGE_TMP_(\w+)/gm,function(K,i){if(i=="b"){return"**"}if(i=="em"){return"//"}if(i=="u"){return"__"}if(i=="code"){return"''"}return""});if(u=="test"){if(!HTMLParser_test_result(w)){return}}w=w.replace(/\{ \{ rss&gt;Feed:/mg,"{{rss&gt;http://");w=w.replace(/~ ~ (NOCACHE|NOTOC)~ ~/mg,"~~$1~~");w=w.replace(/>.*?oIWIKIo(.*?)cIWIKIc/mg,">$1");if(j){if(s){w=w.replace(/\s*([\|\^]+)((\W\W_FORMAT_SPACE_)+)/gm,function(i,K,L){L=L.replace(/_FORMAT_SPACE_/g,"");return(L+K)})}w=w.replace(/&quot;/g,'"');var f=new RegExp(j+"([\\-]{2,})","g");w=w.replace(f," $1");var f=new RegExp("(\\w|\\d)(\\*\\*|\\/\\/|\\'\\'|__|</del>)"+j+"(\\w|\\d)","g");w=w.replace(f,"$1$2$3");var f=new RegExp(j+"@@_SP_@@","g");w=w.replace(f," ");w=w.replace(/([\*\/_]{2})@@_SP_@@(&\w+;)/g,"$1 $2");w=w.replace(/\n@@_SP_@@\n/g,"");w=w.replace(/@@_SP_@@\n/g,"");w=w.replace(/@@_SP_@@/g," ");var f=new RegExp(j+"([^\\)\\]\\}\\{\\-\\.,;:\\!?\"\x94\x92\u201D\u2019'])","g");w=w.replace(f," $1");f=new RegExp(j,"g");w=w.replace(f,"");if(d){w=w.replace(/(\s+[\-\*_]\s*)([\*\/_\']{2})(.*?)(\2)([^\n]*)\n+/gm,function(L,i,N,O,K,M){return(i+N+O+K+M+"\n")})}}var b="\\\\";if(E){w=w.replace(/(L_BR_K)+/g,b);w=w.replace(/L_BR_K/gm,b);w=w.replace(/(\\\\)\s+/gm,"$1 \n")}if(x){w=w.replace(/\s+<\/(code|file)>/g,"\n</$1>");if(B){w=w.replace(/\s+;/mg,";");w=w.replace(/&lt;\s+/mg,"<");w=w.replace(/\s+&gt;/mg,">")}}if(p){w+="\n"+b+"\n";var f=new RegExp(l,"g");w=w.replace(f," "+b+" ");w=w.replace(/(\||\^)[ ]+(\||\^)\s$/g,"$1\n");w=w.replace(/(\||\^)[ ]+(\||\^)/g,"$1")}w=w.replace(/_FCKG_BLANK_TD_/g," ");if(n){w=w.replace(/\/\/&lt;\/\/\s*/g,"&lt;")}if(v.length){w=w.replace(/<sup>\(\(\){2,}\s*<\/sup>/g,"");w=w.replace(/\(\(+(\d+)\)\)+/,"(($1))");for(var D in g){var a=D.match(/_(\d+)/);var G=new RegExp("(<sup>)*[(]+"+a[1]+"[)]+(</sup>)*");w=w.replace(G,"(("+g[D].replace(/_FN_PAREN_C_/g,") ")+"))")}w=w.replace(/<sup><\/sup>/g,"");w=w.replace(/((<sup>\(\(.*\)\)\)?<\/sup>))/mg,function(i){if(!i.match(/p>\(\(\d+/)){return""}return i})}w=w.replace(/(={3,}.*?)(\{\{.*?\}\})(.*?={3,})/g,"$1$3\n\n$2");w=w.replace(/(<sup>)*\s*\[\[\s*\]\]\s*(<\/sup>)*\n*/g,"");w=w.replace(/<sup>(.*?)(\(\(.*\)\))\s*<\/sup>/mg,"$1$2");if(t){w=w.replace(/<\s+/g,"<");w=w.replace(/&lt;\s+/g,"<")}if(o){var A="%";var f=new RegExp("(["+A+"])","g");w=w.replace(/(&lt;nowiki&gt;)(.*?)(&lt;\/nowiki&gt;)/mg,function(K,M,i,L){i=i.replace(/%%(.)%%/mg,"NOWIKI_$1_");return M+i.replace(f,"NOWIKI_$1_")+L})}w=w.replace(/__SWF__(\s*)\[*/g,"{{$1");w=w.replace(/\|.*?\]*(\s*)__FWS__/g,"$1}}");w=w.replace(/(\s*)__FWS__/g,"$1}}");w=w.replace(/\n{3,}/g,"\n\n");w=w.replace(/_LIST_EOFL_/gm," "+b+" ");if(embedComplexTableMacro){if(w.indexOf("~~COMPLEX_TABLES~~")==-1){w+="~~COMPLEX_TABLES~~\n"}}else{w=w.replace(/~~COMPLEX_TABLES~~/gm,"")}w=w.replace(/_CKG_ASTERISK_/gm,"*");if(u=="test"){if(HTMLParser_test_result(w)){alert(w)}return}var z=GetE("dw__editform");z.elements.fck_wikitext.value=w;if(u=="bakup"){return}if(u){var F=GetE(u);F.click();return true}}jQuery(document).ready(function(){jQuery("#ebut_test").mousedown(function(){parse_wikitext("test")});jQuery("#ebtn__delete").click(function(){return confirm(JSINFO.confirm_delete)});jQuery("#ebtn__delete").mouseup(function(){draft_delete()});jQuery("#ebtn__dwedit").click(function(){setDWEditCookie(2,this);parse_wikitext("edbtn__save");this.form.submit()});jQuery("#ckgedit_draft_btn").click(function(){ckgedit_get_draft()});jQuery("#backup_button").click(function(){renewLock(true)});jQuery("#backup_button").click(function(){renewLock(true)});jQuery("#revert_to_prev_btn").click(function(){revert_to_prev()});jQuery("#complex_tables").click(function(){setComplexTables(jQuery("#complex_tables").get(0).checked)});jQuery("#ebut_cancel").mouseup(function(){draft_delete()});jQuery("#save_button").mousedown(function(){parse_wikitext("edbtn__save")})});