(function(window, $, undefined){
    /**
     * [getProvince 获取省份]
     * @param {[Object]} regions    [省市区数据]
     * @return {[Array]}            [省数组]
     */
    function getProvince(regions) {
        return regions['provincesArr'];
    }

    /**
     * [getCity 获取市]
     * @param {[Object]} regions        [省市区数据]
     * @param {[String]} provinceName   [省名]
     * @return {[Array]}                [区数组]
     */
    function getCity(regions, provinceName) {
        return regions['provinces'][provinceName]['citiesArr'];
    }

    /**
     * [getArea 获取区]
     * @param {[Object]} regions        [省市区数据]
     * @param {[String]} provinceName   [省名]
     * @param {[String]} cityName       [市名]
     * @return {[Array]}                [区数组]
     */
    function getArea(regions, provinceName, cityName) {
        return regions['provinces'][provinceName]['cities'][cityName]['areasArr'];
    }

    // 初始化 framework7
    var myApp = new Framework7();

    var province = getProvince(regions),
        city = getCity(regions, '广东省'),
        area = getArea(regions, '广东省', '广州市');

    // 保存 picker选择的省
    var provinceSelect = '';
    var pickerLocation = myApp.picker({
        input: '#location',
        rotateEffect: true,
        toolbarTemplate: `
            <div class="toolbar">
                <div class="toolbar-inner">
                    <div class="left">
                        <a href="#" class="link close-picker">取消</a>
                    </div>
                    <div class="right">
                        <a href="#" class="link close-picker">完成</a>
                    </div>
                </div>
            </div>
        `,
        // 设置默认值
        value: ['广东省', '深圳市', '南山区'],
        cols: [
            // 省相关
            {
                cssClass: 'f-s-14',
                width: '33.33%',
                textAlign: 'left',
                values: province,
                onChange: function(picker, province) {
                    if (picker.cols[1].replaceValues) {
                        provinceSelect = province;
                        city = getCity(regions, province);
                        area = getArea(regions, province, city[0]);
                        picker.cols[1].replaceValues(city);
                        // 区相关
                        if (area.length !== 0) {
                          picker.cols[2].replaceValues(area);
                        } else {
                          picker.cols[2].replaceValues(city);
                        }
                    }
                }
            },
            // 市相关
            {
                cssClass: 'f-s-14',
                width: '33.33%',
                textAlign: 'center',
                values: city,
                // 区相关
                onChange: function(picker, city) {
                    if (picker.cols[2].replaceValues) {
                        area = getArea(regions, provinceSelect, city);
                        if (area.length !== 0) {
                            picker.cols[2].replaceValues(area);
                        } else {
                            picker.cols[2].replaceValues([city]);
                        }
                    }
                }
            },
            // 区相关
            {
                cssClass: 'f-s-14',
                width: '33.33%',
                textAlign: 'right',
                values: area
            }

        ]
    })
    
})(window, jQuery)