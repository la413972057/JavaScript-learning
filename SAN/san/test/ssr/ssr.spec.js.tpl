describe("Component serialize from compiled renderer and reverse", function () {

    it("update attribute", function (done) {
        ##cmpt1##

        expect(wrap.firstChild.className).toBe('');
        expect(myComponent.data.get('email')).toBe('errorrik@gmail.com');
        expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('email', 'erik168@163.com');
        myComponent.data.set('name', 'erik');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.title).toBe('erik168@163.com');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        })

    });

    it("update text", function (done) {
        ##cmpt2##


        expect(myComponent.data.get('email')).toBe('errorrik@gmail.com');
        expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('email', 'erik168@163.com');
        myComponent.data.set('name', 'erik');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.innerHTML.indexOf('erik')).toBe(0);
            expect(span.title.indexOf('erik168@163.com')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        })

    });

    it("update component", function (done) {
        ##cmpt3##

        expect(myComponent.data.get('jokeName')).toBe('airike');
        expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('name', 'erik');
        myComponent.data.set('jokeName', '2b');

        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML.indexOf('airike')).toBe(0);
        expect(span.title).toBe('errorrik');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.innerHTML.indexOf('2b')).toBe(0);
            expect(span.title).toBe('erik');
            expect(myComponent.data.get('jokeName')).toBe('2b');
            expect(myComponent.data.get('name')).toBe('erik');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("update component, main element has attribute", function (done) {
        ##cmpt4##

        myComponent.data.set('name', 'erik');
        myComponent.data.set('jokeName', '2bbbbbbb');

        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML.indexOf('airike') >= 0).toBeTruthy();
        expect(span.title).toBe('airike');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.innerHTML.indexOf('2bbbbbbb') >= 0).toBeTruthy();
            expect(span.title).toBe('2bbbbbbb');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("update component, merge init data and given data", function (done) {
        ##cmpt5##

        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML.indexOf('airike') >= 0).toBeTruthy();
        expect(span.title).toBe('title');
        var a = wrap.getElementsByTagName('a')[0];
        expect(a.title).toBe('none');
        var u = wrap.getElementsByTagName('u')[0];
        expect(u.title).toBe('bidu');

        myComponent.data.set('school', 'hainan-mid');
        myComponent.data.set('jokeName', '2bbbbbbb');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.innerHTML.indexOf('2bbbbbbb') >= 0).toBeTruthy();
            expect(span.title).toBe('title');
            var a = wrap.getElementsByTagName('a')[0];
            expect(a.title).toBe('hainan-mid');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("update for, init with empty data", function (done) {
        ##cmpt6##
        myComponent.attach(wrap);

        var lis = wrap.getElementsByTagName('li');
        expect(lis.length).toBe(2);

        myComponent.data.push('persons',
            {name: 'otakustay', email: 'otakustay@gmail.com'}
        );

        san.nextTick(function () {
            var lis = wrap.getElementsByTagName('li');
            expect(lis.length).toBe(3);
            expect(lis[1].getAttribute('title')).toBe('otakustay');
            expect(lis[1].innerHTML.indexOf('otakustay - otakustay@gmail.com')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("push update for, init with many data", function (done) {
        ##cmpt7##

        var lis = wrap.getElementsByTagName('li');
        expect(lis.length).toBe(4);
        expect(lis[1].getAttribute('title')).toBe('errorrik');
        expect(lis[1].innerHTML.indexOf('errorrik - errorrik@gmail.com')).toBe(0);

        myComponent.data.push('persons',
            {name: 'otakustay', email: 'otakustay@gmail.com'}
        );

        san.nextTick(function () {
            var lis = wrap.getElementsByTagName('li');
            expect(lis.length).toBe(5);
            expect(lis[3].getAttribute('title')).toBe('otakustay');
            expect(lis[3].innerHTML.indexOf('otakustay - otakustay@gmail.com')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });


    it("remove update for, init with many data", function (done) {
        ##cmpt8##

        myComponent.data.removeAt('persons', 0);

        var lis = wrap.getElementsByTagName('li');
        expect(lis.length).toBe(4);
        expect(lis[1].getAttribute('title')).toBe('errorrik');
        expect(lis[1].innerHTML.indexOf('errorrik - errorrik@gmail.com')).toBe(0);


        san.nextTick(function () {
            var lis = wrap.getElementsByTagName('li');
            expect(lis.length).toBe(3);
            expect(lis[1].getAttribute('title')).toBe('otakustay');
            expect(lis[1].innerHTML.indexOf('otakustay - otakustay@gmail.com')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });


    it("set update for, init with many data", function (done) {
        ##cmpt9##

        myComponent.data.set('persons[0]', {name: 'erik', email: 'erik168@163.com'});

        var lis = wrap.getElementsByTagName('li');
        expect(lis.length).toBe(4);
        expect(lis[1].getAttribute('title')).toBe('errorrik');
        expect(lis[1].innerHTML.indexOf('errorrik - errorrik@gmail.com')).toBe(0);


        san.nextTick(function () {
            var lis = wrap.getElementsByTagName('li');
            expect(lis.length).toBe(4);
            expect(lis[1].getAttribute('title')).toBe('erik');
            expect(lis[1].innerHTML.indexOf('erik - erik168@163.com')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("update if, init with true", function (done) {
        ##cmpt10##

        expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('cond', false);
        var span = wrap.getElementsByTagName('span')[0];
        expect(span.title).toBe('errorrik');


        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(0);

            myComponent.data.set('cond', true);

            san.nextTick(function () {
                var span = wrap.getElementsByTagName('span')[0];
                expect(span.title).toBe('errorrik');
                expect(span.innerHTML.indexOf('errorrik') >= 0).toBeTruthy();


                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("update if, init with false", function (done) {
        ##cmpt11##

        myComponent.data.set('cond', true);
        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(0);


        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.title).toBe('errorrik');
            expect(span.innerHTML.indexOf('errorrik')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("update else, init with false", function (done) {
        ##cmpt12##

        myComponent.data.set('cond', true);
        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(1);
        expect(spans[0].title).toBe('otakustay');
        expect(spans[0].innerHTML.indexOf('otakustay')).toBe(0);


        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(1);
            expect(spans[0].title).toBe('errorrik');
            expect(spans[0].innerHTML.indexOf('errorrik')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("update else, init with true", function (done) {
        ##cmpt13##

        myComponent.data.set('cond', false);
        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(1);
        expect(spans[0].title).toBe('errorrik');
        expect(spans[0].innerHTML.indexOf('errorrik')).toBe(0);


        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(1);
            expect(spans[0].title).toBe('otakustay');
            expect(spans[0].innerHTML.indexOf('otakustay')).toBe(0);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it('default and named slot', function (done) {
        ##cmpt14##

        var u = wrap.getElementsByTagName('u')[0];
        var p = wrap.getElementsByTagName('p')[0];
        var h3 = wrap.getElementsByTagName('h3')[0];
        expect(u.title).toBe('tab');
        expect(p.title).toBe('one');
        expect(h3.title).toBe('1');

        myComponent.data.set('tabText', 'ctab');
        myComponent.data.set('text', 'two');
        myComponent.data.set('title', '2');

        san.nextTick(function () {
            expect(u.title).toBe('ctab');
            expect(p.title).toBe('two');
            expect(h3.title).toBe('2');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it('default and named slot, content by default', function (done) {
        ##cmpt15##

        var p = wrap.getElementsByTagName('p')[0];
        var h3 = wrap.getElementsByTagName('h3')[0];
        expect(p.title).toBe('five');
        expect(h3.title).toBe('5');

        myComponent.data.set('text', 'two');
        myComponent.data.set('title', '2');
        myComponent.data.set('tText', 'six');
        myComponent.data.set('tTitle', '6');

        san.nextTick(function () {
            expect(p.title).toBe('six');
            expect(h3.title).toBe('6');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("two way binding text value", function (done) {
        ##cmpt16##

        var span = wrap.getElementsByTagName('span')[0];
        var input = wrap.getElementsByTagName('input')[0];
        expect(span.title).toBe('errorrik');
        expect(input.value).toBe('errorrik');


        function doneSpec() {
            var name = myComponent.data.get('name');

            if (name !== 'errorrik') {
                expect(span.title).toBe(name);

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
                return;
            }

            setTimeout(doneSpec, 500);
        }

        triggerEvent('#' + input.id, 'input', 'test' + (+new Date()));
        setTimeout(doneSpec, 500);

    });

    it("two way binding textarea value", function (done) {
        ##cmpt17##

        var span = wrap.getElementsByTagName('span')[0];
        var input = wrap.getElementsByTagName('textarea')[0];
        expect(span.title).toBe('errorrik');
        expect(input.value).toBe('errorrik');


        function doneSpec() {
            var name = myComponent.data.get('name');

            if (name !== 'errorrik') {
                expect(span.title).toBe(name);

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
                return;
            }

            setTimeout(doneSpec, 500);
        }

        triggerEvent('#' + input.id, 'input', 'test' + (+new Date()));
        setTimeout(doneSpec, 500);

    });

    it("component with san-if, init with true", function (done) {
        ##cmpt18##

        expect(myComponent.data.get('jokeName')).toBe('airike');
        expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('name', 'erik');
        myComponent.data.set('jokeName', '2b');

        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML.indexOf('airike')).toBe(0);
        expect(span.title).toBe('errorrik');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.innerHTML.indexOf('2b')).toBe(0);
            expect(span.title).toBe('erik');
            expect(myComponent.data.get('jokeName')).toBe('2b');
            expect(myComponent.data.get('name')).toBe('erik');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("component with san-if, init with false", function (done) {
        ##cmpt19##

        // expect(myComponent.data.get('jokeName')).toBe('airike');
        // expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('name', 'erik');
        myComponent.data.set('jokeName', '2b');
        myComponent.data.set('cond', true);

        // var span = wrap.getElementsByTagName('span')[0];
        // expect(span.innerHTML.indexOf('airike')).toBe(0);
        // expect(span.title).toBe('errorrik');

        san.nextTick(function () {
            var span = wrap.getElementsByTagName('span')[0];
            expect(span.innerHTML.indexOf('2b')).toBe(0);
            expect(span.title).toBe('erik');
            expect(myComponent.data.get('jokeName')).toBe('2b');
            expect(myComponent.data.get('name')).toBe('erik');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("component with san-if, init with true, change much times", function (done) {
        ##cmpt20##

        expect(myComponent.data.get('jokeName')).toBe('airike');
        expect(myComponent.data.get('name')).toBe('errorrik');
        myComponent.data.set('name', 'erik');
        myComponent.data.set('jokeName', '2b');

        myComponent.data.set('cond', false);

        var span = wrap.getElementsByTagName('span')[0];
        expect(span.innerHTML.indexOf('airike')).toBe(0);
        expect(span.title).toBe('errorrik');

        san.nextTick(function () {
            expect(wrap.getElementsByTagName('span').length).toBe(0);
            myComponent.data.set('cond', true);

            san.nextTick(function () {
                var span = wrap.getElementsByTagName('span')[0];
                expect(span.innerHTML.indexOf('2b')).toBe(0);
                expect(span.title).toBe('erik');
                expect(myComponent.data.get('jokeName')).toBe('2b');
                expect(myComponent.data.get('name')).toBe('erik');


                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });

    });

    it("component with san-for, then push", function (done) {
        ##cmpt21##

        myComponent.data.push('list', {title: '3', text: 'three'});

        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(2);
        expect(spans[0].title).toBe('1');
        expect(spans[1].title).toBe('2');

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(3);
            expect(spans[0].title).toBe('1');
            expect(spans[1].title).toBe('2');
            expect(spans[2].title).toBe('3');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });

    it("component with san-for, then set item", function (done) {
        ##cmpt22##

        myComponent.data.set('list[0].title', '111');

        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(2);
        expect(spans[0].title).toBe('1');
        expect(spans[1].title).toBe('2');

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(2);
            expect(spans[0].title).toBe('111');
            expect(spans[1].title).toBe('2');


            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });

    });



    it("render component with san-if, init true, update soon", function (done) {
        ##cmpt23##

        var dts = wrap.getElementsByTagName('dt');
        expect(dts[0].title).toBe('erik');
        expect(dts[1].title).toBe('firede');

        var dds = wrap.getElementsByTagName('dd');
        var p1lis = dds[1].getElementsByTagName('li');
        expect(p1lis[0].title).toBe('2345678');
        expect(p1lis[1].title).toBe('23456789');

        myComponent.data.set('cond', false);
        myComponent.data.set('persons[1].name', 'leeight');
        myComponent.data.set('persons[1].tels', ['12121212', '16161616', '18181818']);

        san.nextTick(function () {
            var dts = wrap.getElementsByTagName('dt');
            var dds = wrap.getElementsByTagName('dd');
            expect(dts.length).toBe(0);
            expect(dds.length).toBe(0);


            myComponent.data.set('cond', true);

            san.nextTick(function () {
                var dts = wrap.getElementsByTagName('dt');
                expect(dts[0].title).toBe('erik');
                expect(dts[1].title).toBe('leeight');

                var dds = wrap.getElementsByTagName('dd');
                var p1lis = dds[1].getElementsByTagName('li');
                expect(p1lis[0].title).toBe('12121212');
                expect(p1lis[1].title).toBe('16161616');
                expect(p1lis[2].title).toBe('18181818');

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("bool attr, init false", function (done) {
        ##cmpt24##

        expect(wrap.getElementsByTagName('button')[0].disabled).toBeFalsy();
        myComponent.data.set('distate', true);

        san.nextTick(function () {
            expect(wrap.getElementsByTagName('button')[0].disabled).toBeTruthy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("bool attr, init true", function (done) {
        ##cmpt25##

        expect(wrap.getElementsByTagName('button')[0].disabled).toBeTruthy();
        myComponent.data.set('distate', false);

        san.nextTick(function () {
            expect(wrap.getElementsByTagName('button')[0].disabled).toBeFalsy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });


    it("checkbox checked", function (done) {
        ##cmpt26##

        var inputs = wrap.getElementsByTagName('input');
        expect(inputs[0].checked).toBeFalsy();
        expect(inputs[1].checked).toBeTruthy();
        expect(inputs[2].checked).toBeTruthy();

        myComponent.data.set('cValue', ['1']);

        san.nextTick(function () {
            var inputs = wrap.getElementsByTagName('input');
            expect(inputs[0].checked).toBeTruthy();
            expect(inputs[1].checked).toBeFalsy();
            expect(inputs[2].checked).toBeFalsy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("radio checked", function (done) {
        ##cmpt27##

        var inputs = wrap.getElementsByTagName('input');
        expect(inputs[0].checked).toBeFalsy();
        expect(inputs[1].checked).toBeTruthy();
        expect(inputs[2].checked).toBeFalsy();

        myComponent.data.set('cValue', '1');

        san.nextTick(function () {
            var inputs = wrap.getElementsByTagName('input');
            expect(inputs[0].checked).toBeTruthy();
            expect(inputs[1].checked).toBeFalsy();
            expect(inputs[2].checked).toBeFalsy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("option selected", function (done) {
        ##cmpt28##

        var select = wrap.getElementsByTagName('select')[0];
        expect(select.selectedIndex).toBe(1);

        myComponent.data.set('online', 'otakustay');

        san.nextTick(function () {
            var select = wrap.getElementsByTagName('select')[0];
            expect(select.selectedIndex).toBe(2);

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("date data", function (done) {
        ##cmpt29##

        var b = wrap.getElementsByTagName('b')[0];
        expect(b.title).toBe('1983');

        myComponent.data.set('date', new Date(1984, 10, 10));

        san.nextTick(function () {
            var b = wrap.getElementsByTagName('b')[0];
            expect(b.title).toBe('1984');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("date data with init data", function (done) {
        ##cmpt30##

        var b = wrap.getElementsByTagName('b')[0];
        expect(b.title).toBe('1983');

        myComponent.data.set('date', new Date(1984, 10, 10));

        san.nextTick(function () {
            var b = wrap.getElementsByTagName('b')[0];
            expect(b.title).toBe('1984');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("bool attr, no binding", function () {
        ##cmpt31##

        expect(wrap.getElementsByTagName('button')[0].disabled).toBeTruthy();
        myComponent.dispose();
        document.body.removeChild(wrap);
    });

    it("bool attr twoway binding, init true", function (done) {
        ##cmpt32##

        expect(wrap.getElementsByTagName('button')[0].disabled).toBeTruthy();
        myComponent.data.set('distate', false);

        san.nextTick(function () {
            expect(wrap.getElementsByTagName('button')[0].disabled).toBeFalsy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("bool attr twoway binding, init false", function (done) {
        ##cmpt33##

        expect(wrap.getElementsByTagName('button')[0].disabled).toBeFalsy();
        myComponent.data.set('distate', true);

        san.nextTick(function () {
            expect(wrap.getElementsByTagName('button')[0].disabled).toBeTruthy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("s-html", function (done) {
        ##cmpt34##

        expect(/^aa<a>bbb<\/a>cc/i.test(wrap.getElementsByTagName('b')[0].innerHTML)).toBeTruthy();
        myComponent.data.set('html', 'uu<u>xxx</u>yy');

        san.nextTick(function () {
            expect(/^uu<u>xxx<\/u>yy/i.test(wrap.getElementsByTagName('b')[0].innerHTML)).toBeTruthy();

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("component event", function (done) {
        ##cmpt35##

        var span = wrap.getElementsByTagName('span')[0];
        expect(myComponent.data.get('title')).toBe('1');
        expect(span.title).toBe('1');

        setTimeout(function () {
            expect(myComponent.data.get('title')).toBe('1test');
            expect(span.title).toBe('1test');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        }, 200);
    });

    it("data binding name auto camel case", function (done) {
        ##cmpt36##

        var span = wrap.getElementsByTagName('span')[0];

        expect(span.title).toBe('1');
        expect(span.innerHTML.indexOf('one') === 0).toBeTruthy();

        myComponent.data.set('title', '2');
        myComponent.data.set('text', 'two');

        san.nextTick(function () {
            expect(span.title).toBe('2');
            expect(span.innerHTML.indexOf('two') === 0).toBeTruthy();

            myComponent.dispose();
            document.body.removeChild(wrap);

            done();
        })
    });

    it("computed data", function (done) {
        ##cmpt37##

        var b = wrap.getElementsByTagName('b')[0];

        expect(b.title).toBe('real1');

        myComponent.data.set('title', '2');

        san.nextTick(function () {
            expect(b.title).toBe('real2');

            myComponent.dispose();
            document.body.removeChild(wrap);

            done();
        })
    });

    it("complex structure in textnode", function (done) {
        ##cmpt38##

        var a = wrap.getElementsByTagName('a')[0];
        var b = wrap.getElementsByTagName('b')[0];
        expect(/\/span>hello er<u>erik<\/u>ik!<b/i.test(a.innerHTML)).toBeTruthy();
        expect(b.innerHTML).toBe('bbb');

        myComponent.data.set('name', 'er<span>erik</span>ik');

        san.nextTick(function () {
            expect(/\/span>hello er<span>erik<\/span>ik!<b/i.test(a.innerHTML)).toBeTruthy();
            expect(b.innerHTML).toBe('bbb');

            myComponent.dispose();
            document.body.removeChild(wrap);

            done();
        });
    });

    it("select, null and undefined should select empty option, init undefined", function (done) {
        ##cmpt39##

        var select = wrap.getElementsByTagName('select')[0];

        expect(select.selectedIndex).toBe(2);
        expect(select.value).toBe('');
        myComponent.data.set('online', 'errorrik');

        san.nextTick(function () {
            var select = wrap.getElementsByTagName('select')[0];

            expect(select.selectedIndex).toBe(0);
            expect(select.value).toBe('errorrik');
            expect(wrap.getElementsByTagName('b')[0].title).toBe('errorrik');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("select, null and undefined should select empty option, init valued", function (done) {
        ##cmpt40##

        var select = wrap.getElementsByTagName('select')[0];

        expect(select.selectedIndex).toBe(1);
        expect(select.value).toBe('firede');
        myComponent.data.set('online', null);

        san.nextTick(function () {
            var select = wrap.getElementsByTagName('select')[0];

            expect(select.selectedIndex).toBe(2);
            expect(select.value).toBe('');
            expect(wrap.getElementsByTagName('b')[0].title).toBe('');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("style and class autoexpand", function (done) {
        ##cmpt41##

        var a = wrap.getElementsByTagName('a')[0];
        var h3 = wrap.getElementsByTagName('h3')[0];
        var span = wrap.getElementsByTagName('span')[0];

        expect(span.style.position).toBe('fixed');
        expect(span.style.display).toBe('block');
        expect(a.style.width).toBe('50px');
        expect(a.style.height).toBe('50px');
        expect(h3.style.width).toBe('50px');
        expect(h3.style.height).toBe('20px');
        expect(/(^| )app( |$)/.test(a.className)).toBeTruthy();
        expect(/(^| )main( |$)/.test(a.className)).toBeTruthy();
        expect(/(^| )app-title( |$)/.test(h3.className)).toBeTruthy();
        expect(/(^| )main-title( |$)/.test(h3.className)).toBeTruthy();
        expect(/(^| )ui( |$)/.test(span.className)).toBeTruthy();
        expect(/(^| )ui-label( |$)/.test(span.className)).toBeTruthy();

        myComponent.data.set('styles.title.height', '30px');
        myComponent.data.push('classes.main', 'wrap');

        san.nextTick(function () {

            expect(/(^| )app( |$)/.test(a.className)).toBeTruthy();
            expect(/(^| )main( |$)/.test(a.className)).toBeTruthy();
            expect(/(^| )wrap( |$)/.test(a.className)).toBeTruthy();

            expect(h3.style.height).toBe('30px');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });

    it("data binding no expr, auto true", function (done) {
        ##cmpt42##

        var us = wrap.getElementsByTagName('u');

        expect(us.length).toBe(1);
        expect(myComponent.ref('l').data.get('hasu')).toBeTruthy();

        san.nextTick(function () {
            myComponent.dispose();
            document.body.removeChild(wrap);

            done();
        })
    });

    it("update elif, init with all true", function (done) {
        ##cmpt43##

        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(1);
        expect(spans[0].title).toBe('errorrik');

        myComponent.data.set('cond1', false);

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(1);
            expect(spans[0].title).toBe('leeight');

            myComponent.data.set('cond2', false);
            san.nextTick(function () {
                var spans = wrap.getElementsByTagName('span');
                expect(spans.length).toBe(0);

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("update elif, init with all false", function (done) {
        ##cmpt44##

        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(0);

        myComponent.data.set('cond2', true);

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(1);
            expect(spans[0].title).toBe('leeight');

            myComponent.data.set('cond1', true);
            san.nextTick(function () {
                var spans = wrap.getElementsByTagName('span');
                expect(spans.length).toBe(1);
                expect(spans[0].title).toBe('errorrik');

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("update multi elif, init with mid elif", function (done) {
        ##cmpt45##

        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(1);
        expect(spans[0].title).toBe('big');
        expect(wrap.getElementsByTagName('b').length).toBe(0);

        myComponent.data.set('num', 30000);

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(1);
            expect(spans[0].title).toBe('biiig');
            expect(wrap.getElementsByTagName('b').length).toBe(0);

            myComponent.data.set('num', 10);
            san.nextTick(function () {
                var spans = wrap.getElementsByTagName('span');
                expect(spans.length).toBe(0);
                var bs = wrap.getElementsByTagName('b');
                expect(bs[0].title).toBe('small');

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("update multi elif, init with first if", function (done) {
        ##cmpt46##


        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(1);
        expect(spans[0].title).toBe('biiig');
        expect(wrap.getElementsByTagName('b').length).toBe(0);

        myComponent.data.set('num', 30);

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(0);
            var bs = wrap.getElementsByTagName('b');
            expect(bs[0].title).toBe('small');

            myComponent.data.set('num', 3000);
            san.nextTick(function () {
                var spans = wrap.getElementsByTagName('span');
                expect(spans.length).toBe(1);
                expect(spans[0].title).toBe('biig');
                expect(wrap.getElementsByTagName('b').length).toBe(0);

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("update multi elif, init with first if", function (done) {
        ##cmpt47##

        var spans = wrap.getElementsByTagName('span');
        expect(spans.length).toBe(0);
        var bs = wrap.getElementsByTagName('b');
        expect(bs[0].title).toBe('small');

        myComponent.data.set('num', 30000);

        san.nextTick(function () {
            var spans = wrap.getElementsByTagName('span');
            expect(spans.length).toBe(1);
            expect(spans[0].title).toBe('biiig');
            expect(wrap.getElementsByTagName('b').length).toBe(0);

            myComponent.data.set('num', 300);
            san.nextTick(function () {
                var spans = wrap.getElementsByTagName('span');
                expect(spans.length).toBe(1);
                expect(spans[0].title).toBe('big');
                expect(wrap.getElementsByTagName('b').length).toBe(0);

                myComponent.dispose();
                document.body.removeChild(wrap);
                done();
            });
        });
    });

    it("component fill slot", function (done) {
        ##cmpt48##


        var input = wrap.getElementsByTagName('input')[0];
        expect(input.value).toBe('er');
        expect(wrap.getElementsByTagName('b')[0].title).toBe('er');

        myComponent.data.set('searchValue', 'san');

        san.nextTick(function () {
            var input = wrap.getElementsByTagName('input')[0];
            expect(input.value).toBe('san');
            expect(wrap.getElementsByTagName('b')[0].title).toBe('san');

            myComponent.dispose();
            document.body.removeChild(wrap);
            done();
        });
    });
});
