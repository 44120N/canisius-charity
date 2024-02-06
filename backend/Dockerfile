FROM python:3.11.6-bookworm
ENV PYHONUNBUFFERED True
ENV APP_HOME /back-end
WORKDIR $APP_HOME
COPY . ./

RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

CMD exec gunicorn --bind :$PORT --workers 1 --thread 8 --timeout 0 app:app